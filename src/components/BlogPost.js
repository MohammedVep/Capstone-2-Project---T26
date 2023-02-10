import React from 'react';

function BlogPost() {
    return (
        <>
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
          <a href="../mainMenu.html" className="btn btn-primary" role="button">Cancel</a>
        </div>
        </>
    )
}

