import "./header.css"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img 
            className="headerImg"
            src="Photo by sanam magar from Pexels: https://www.pexels.com/photo/photo-of-cloudy-sky-during-golden-hour-14677839/"
            alt=""
        />
    </div>
  )
}
