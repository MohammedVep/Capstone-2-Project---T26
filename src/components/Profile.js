import React from 'react';

function MainMenu() {
    return (
        <>
            <h1 className="page-title">Profile</h1>
            <br />
            <div className="component">
                <div className="profile-pic">
                <label className="-label" htmlFor="file">
                    <span className="glyphicon glyphicon-camera" />
                    <span>Change Profile picture</span>
                </label>
                <input id="file" type="file" onchange="loadFile(event)" />
                <img src="../imgs/Profile_Picture.jpg" id="output" width={200} />
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
                <a href="../mainMenu.html" className="btn btn-primary" role="button">
                    Cancel
                </a>
                </form>
            </div>
        </>
    )
}