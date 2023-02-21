import React from 'react'
import BlogPost from './BlogPost';
import Profile from './Profile';
import UpdateInformation from './UpdateInformation';
import GetHelp from './GetHelp';
import CloseAccount from './CloseAccount';
import ChatApp from './ChatApp';


import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

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
                            <a className="student-menu-text" href="">
                            <Link to="/GetHelp">Get Help</Link>
                            </a>
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
                            Sign Out
                            </a>
                        </td>
                        <td className="update-information">
                            <a
                            className="student-menu-text"
                            ><Link to="/UpdateInformation">
                            Update Information
                            </Link>
                            </a>
                        </td>
                        <td className="close-account">
                            <a className="student-menu-text" href="">
                            Close Account
                            </a>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <Routes>
                    <Route path="/Profile" element={<Profile />}/>
                    <Route path="/BlogPost" element={<BlogPost />}/>
                    <Route path="/UpdateInformation" element={<UpdateInformation />}/>
                    <Route path="/GetHelp" element={<GetHelp />}/>
                    <Route path="/CloseAccount" element={<CloseAccount />}/>
                </Routes>
            </BrowserRouter>
            
        </>
  )
}

export default MainMenu