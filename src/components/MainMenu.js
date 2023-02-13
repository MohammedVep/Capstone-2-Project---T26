import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import BlogPost from './BlogPost';
import Profile from './Profile';

export default function MainMenu() {
    return (
        <>
            <Router>
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
                            Help Student
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
                            href="update-information/updateInformation.html"
                            >
                            Update Information
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
                <Switch>
                    <Route path="/Profile"><Profile /></Route>
                    <Route path="/BlogPost"><BlogPost /></Route>
                </Switch>
            </Router>
            
</>
    )
}