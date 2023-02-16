import "./post.css";

export default function Post() {
  return (
    <div className='post'>
        <img 
            className='postImg'
            src="https://www.pexels.com/photo/photo-of-cloudy-sky-during-golden-hour-14677839/"
            alt=""
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Computer Science</span>
                <span className="postCat">Other</span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit amet
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem enim facere aperiam non suscipit ducimus! Autem minus officia ut hic fugit, at, nisi dicta voluptas provident debitis sapiente, temporibus commodi.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem enim facere aperiam non suscipit ducimus! Autem minus officia ut hic fugit, at, nisi dicta voluptas provident debitis sapiente, temporibus commodi.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem enim facere aperiam non suscipit ducimus! Autem minus officia ut hic fugit, at, nisi dicta voluptas provident debitis sapiente, temporibus commodi.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem enim facere aperiam non suscipit ducimus! Autem minus officia ut hic fugit, at, nisi dicta voluptas provident debitis sapiente, temporibus commodi.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem enim facere aperiam non suscipit ducimus! Autem minus officia ut hic fugit, at, nisi dicta voluptas provident debitis sapiente, temporibus commodi.
        </p>
    </div>
  )
}
