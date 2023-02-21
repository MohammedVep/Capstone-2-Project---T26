import React from 'react'
import BlogPost from './BlogPost'
import ChatApp from './ChatApp'
import CloseAccount from './CloseAccount'
import HelpStudent from './HelpStudent'
import Profile from './Profile'
import UpdateInformation from './UpdateInformation'

import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from 'react-router-dom'

const MainMenu = () => {
  return (
    <>
        <BrowserRouter>
        <h1 className="page-title">Welcome back student</h1>
                <br />
                <div className="component">
                    <table className="main-menu">
                    <tbody>
                        <tr>
                        <td className="profile">
                            <p className="student-menu-text">
                            <Link to="/Profile">Profile</Link>
                            </p>
                        </td>
                        <td className="get-help">
                            <p className="student-menu-text" href="">
                            <Link to="/HelpStudent">Help Student</Link>
                            </p>
                        </td>
                        <td className="blog-post">
                            <a className="student-menu-text">
                            <Link to="/BlogPost">Blog Post</Link>
                            </a>
                        </td>
                        </tr>
                        <tr>
                        <td className="sign-out">
                            <a className="student-menu-text" href="">
                            <Link to="/SignOut">Sign Out</Link>
                            </a>
                        </td>
                        <td className="update-information">
                            <p
                            className="student-menu-text"
                            >
                            <Link to="/UpdateInformation">Update Information</Link>
                            </p>
                        </td>
                        <td className="close-account">
                            <a className="student-menu-text" href="">
                            <Link to="/CloseAccount">Close Account</Link>
                            </a>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <Routes>
                    <Route path="/Profile" element={<Profile />}/>
                    <Route path="/BlogPost" element={<BlogPost />}/>
                    <Route path="/HelpStudent" element={<HelpStudent />}/>
                    <Route path="/UpdateInformation" element={<UpdateInformation />}/>
                </Routes>
        </BrowserRouter>
    </>
  )
}

export default MainMenu