import React from 'react'
import "./singlePost.css"
export default function singlePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img src="https://www.pexels.com/photo/photo-of-cloudy-sky-during-golden-hour-14677839/" alt="" className='singlePostImg'/>
            <h1 className="singlePostTitle">
                Lorem, ipsum dolor sit amet.
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-regular fa-trash"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>Author: <b>Mohammed</b></span>
                <span className='singlePostDate'>1 hour ago</span>
            </div>
            <p className='singlePostDesc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint ex reprehenderit cumque neque, eligendi nihil officia perferendis perspiciatis deserunt nostrum laborum ad temporibus iusto vel esse animi minus saepe necessitatibus.</p>
        </div>
    </div>
  )
}
