import { useEffect } from "react";
import { useLocation } from "react-router";
import "./singlePost.css"
export default function singlePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({})
  useEffect(() =>{
    const getPost = async () => {
        const res = await axios.get("/posts/" + path);
        setPost(res.data);
    };
    getPost()
  },[path])
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            {post.photo && (
                <img src={post.photo} alt="" className='singlePostImg'/>
            )}
            
            <h1 className="singlePostTitle">
                {post.tile}
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-regular fa-trash"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>Author: <b>{post.username}</b></span>
                <span className='singlePostDate'>{newDate(post.createdAt).toDateString()}</span>
            </div>
            <p className='singlePostDesc'>{post.desc}</p>
        </div>
    </div>
  )
}
