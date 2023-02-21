import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom"
import MainMenu from './MainMenu'

const Profile = () => {
  return (
    <>
        <BrowserRouter>
        <h1 className="page-title">Profile</h1>
            <br />
            <div className="component">
                <div className="profile-pic">
                <label className="-label" htmlFor="file">
                    <span className="glyphicon glyphicon-camera" />
                    <span>Change Profile picture</span>
                </label>
                <input id="file" type="file" onchange="loadFile(event)" />
                <img src="../../public/imgs/Profile_Picture.jpg" id="output" width={200} />
                <br />
                </div>
                <br />
                <form>
                <label htmlFor="name" className="form-name">
                    Name:{" "}
                </label>
                <input type="text" id="name" name="name" />
                <br />
                <label htmlFor="bio" className="form-name">
                    Bio:{" "}
                </label>
                <textarea
                    id="bio"
                    name="bio"
                    rows={20}
                    cols={50}
                    defaultValue={"Enter bio"}
                />
                <br />
                <input className="btn btn-primary" type="submit" defaultValue="save" />
                <a className="btn btn-primary" role="button">
                    <Link to="/">Cancel</Link>
                </a>
                </form>
            </div>
            <Routes>
                <Route path="/" element={<MainMenu />}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Profile