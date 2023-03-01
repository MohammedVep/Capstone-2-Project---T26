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
            {/* <BrowserRouter> */}
                <h1 className="page-title">Welcome back student</h1>
                <br />
                <div className="component justify-content-center">
                    <table className="main-menu">
                    <tbody>
                        <tr>
                        <td className="profile bg-green">
                            <a className="student-menu-text">
                            <Link className='text-white' to="/Profile">Profile</Link>
                            </a>
                        </td>
                        <td className="get-help bg-orange">
                            <a className="student-menu-text" href="">
                            <Link className='text-white' to="/GetHelp">Get Help</Link>
                            </a>
                        </td>
                        <td className="blog-post bg-silver">
                            <a className="student-menu-text">
                            <Link  className='text-white' to="/BlogPost">Blog Post</Link>
                            </a>
                        </td>
                        </tr>
                        <tr>
                        <td className="sign-out bg-light-pink">
                            <a className="student-menu-text text-white" href="">
                            Sign Out
                            </a>
                        </td>
                        <td className="update-information bg-blue-green">
                            <a
                            className="student-menu-text"
                            ><Link to="/UpdateInformation" className='text-white'>
                            Update Information
                            </Link>
                            </a>
                        </td>
                        <td className="close-account bg-red">
                            <a className="student-menu-text text-white" href="">
                            Close Account
                            </a>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                {/* <Routes>
                    <Route path="/Profile" element={<Profile />}/>
                    <Route path="/BlogPost" element={<BlogPost />}/>
                    <Route path="/UpdateInformation" element={<UpdateInformation />}/>
                    <Route path="/GetHelp" element={<GetHelp />}/>
                    <Route path="/CloseAccount" element={<CloseAccount />}/>
                </Routes> */}
            {/* </BrowserRouter> */}
            
        </>
  )
}

export default MainMenu