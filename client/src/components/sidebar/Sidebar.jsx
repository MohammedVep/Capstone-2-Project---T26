import axios from 'axios';
import { useEffect, useState } from 'react'
import './sidebar.css'

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() =>{
    const getCats = async () => {
        const res = await axios.get("/categories");
        setCats(res.data);
    }
    getCats();
  })
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://www.pexels.com/photo/photo-of-cloudy-sky-during-golden-hour-14677839/" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia molestias quae eum quam nemo est nesciunt nisi velit, optio eligendi hic! Aperiam sint est pariatur eum omnis possimus, quod ex!</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                {cats.map(c => (
                    <Link to={`/?cat=${c.name}`} className="link">
                        <li className="sidebarListItem">{c.name}</li>
                    </Link>
                ))}
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
                <i className="sidebarIcon fa-brands fa-square-instagram"></i>
            </div>
        </div>
    </div>
  )
}
