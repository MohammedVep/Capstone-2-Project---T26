import React from 'react'
import MainMenu from './MainMenu'
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom"

const BlogPost = () => {
  return (
    <>
        <BrowserRouter>
                <h1 className="page-title">Blog Post</h1>
                <br />
                <div className="component">
                    <label htmlFor="title" className="form-name">Title: </label>
                    <input type="text" id="title" name="title" />
                    <br />
                    <label htmlFor="content" className="form-name">Content: </label>
                    <textarea id="content" name="content" rows={20} cols={50} defaultValue={"Enter Content"} />
                    <br />
                    <input className="btn btn-primary" type="submit" defaultValue="save" />
                    <a className="btn btn-primary" role="button"><Link to="/MainMenu">Cancel</Link></a>
                </div>
                <Routes>
                    <Route path="/MainMenu" element={<MainMenu />}/>
                </Routes>
        </BrowserRouter>
    </>
  )
}

export default BlogPost