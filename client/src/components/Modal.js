import { useState, useCallback, useRef, useEffect } from "react"
import socketIO from 'socket.io-client'
const socket = socketIO.connect("http://localhost:4000");

const Modal = ({url}) => {
    const [image, setImage] = useState("");
    const [fullHeight, setFullHeight] = useState("")
    const ref = useRef(null);
    const [cursor, setCursor] = useState("");

    useEffect(() => {
        socket.emit("browse", {
            url,
        });

        socket.on("image", ({img, fullHeight }) => {
            setImage("data:image/jpeg;base64," + img);
            setFullHeight(fullHeight);
        });
        socket.on("cursor", (cur) => {
            setCursor(cur);
        });
    }, [url]);

    const mouseMove = useCallback((event) => {
        const position = event.currentTarget.getBoundingClientRect();
        const widthChange = 1255 / position.width;
        const heightChange = 800 / position.height;

        socket.emit("mouseMove", {
            x: widthChange * (event.pageX - position.left),
            y: 
                heightChange *
                (event.pageY - position.top - document.documentElement.scrollTop),
        });
    }, []);

    const mouseClick = useCallback((event) => {
        const position = event.currentTarget.getBoundingClientRect();
        const widthChange = 1255 / position.width;
        const heightChange = 800 / position.height;
        socket.emit("mouseClick", {
            x: widthChange * (event.pageX - position.left),
            y: 
                heightChange * 
                (event.pageY - position.top - document.documentElement.scrollTop),
        });
    }, []);

    const mouseScroll = useCallback((event) => {
        const position = event.currentTarget.scrollTop;
        socket.emit("scroll", {
            position,
        });
    }, [])
    return (
        <div className='popup' onScroll={mouseScroll}>
            <div 
            ref={ref}
            className='popup-ref' 
            style={{ cursor, height: fullHeight }}
            >
            {image && (
                <img 
                    src={image}
                    onMouseMove={mouseMove}
                    onClick={mouseClick} 
                    alt='' 
                />)}
            </div>
        </div>
    )
}

export default Modal;