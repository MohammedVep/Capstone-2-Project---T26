import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import MainMenu from './MainMenu'
import axios from "axios";
import {Link} from "react-router-dom"

const BlogPost = () => {
  const navigate = useNavigate();
  const [blogPost, setBlogPost] = useState();
  const [error, setErrors] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://t26-server.herokuapp.com/api/blogpost/create";
      const { data: res } = await axios.post(url, blogPost);
      navigate("/MainMenu");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500
      ) {
        setErrors(error.response.data);
        console.log(error.response);
      }
    }
  };


  const handleChange = ({ currentTarget: input }) => {
    setBlogPost({ ...blogPost, [input.name]: input.value });
};


  return (
    <>
      <h1 className="page-title">Blog Post</h1>
      <br />
      <div className="component">
        <form onSubmit={handleSubmit} className="text-center">
          <label htmlFor="title" className="form-name">Title: </label>
          <input type="text" id="title" name="title" onChange={handleChange}/>
          <br />
          <label htmlFor="post" className="form-name">Content: </label>
          <textarea id="post" name="post" rows={20} cols={50} defaultValue={"Enter Content"}  onChange={handleChange}/>
          <br />
          <input className="btn btn-primary" type="submit" defaultValue="save" />
          <a className="btn btn-primary" role="button"><Link to="/MainMenu">Cancel</Link></a>

        </form>
          
      </div>
    </>
  );
}

export default BlogPost