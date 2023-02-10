import React from 'react';

function MainMenu() {
    return (
        <>
            <h1 className="page-title">Welcome back student</h1>
            <br />
            <div className="component">
                <table className="main-menu">
                <tbody>
                    <tr>
                    <td className="profile">
                        <a className="student-menu-text" href="profile/profile.html">
                        Profile
                        </a>
                    </td>
                    <td className="get-help">
                        <a className="student-menu-text" href="">
                        Get Help
                        </a>
                    </td>
                    <td className="blog-post">
                        <a className="student-menu-text" href="blog-post/blogPost.html">
                        Blog Post
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
</>
    )
}