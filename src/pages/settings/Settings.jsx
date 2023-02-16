import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsUpdateTitle">Delete Account</span>
            </div>
            <form  className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                <img 
                 src="https://www.pexels.com/photo/photo-of-cloudy-sky-during-golden-hour-14677839/"
                 alt="" 
                 />
                 <label htmlFor="fileInput">
                    <i className="settingsPPIcon fa-light fa-circle-user"></i>
                 </label>
                 <input type="file" id="fileInput" style={{display: "none"}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder="Safak" />
                <label>Email</label>
                <input type="email" placeholder="Safak@gmail.com" />
                <label>Password</label>
                <input type="password" />
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar />
    </div>
  )
}
