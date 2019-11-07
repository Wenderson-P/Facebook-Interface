import React from 'react';
import './PostHeader.css'

export default function PostHeader({ author, date, content }) {
  return (
    <div className="postHeaderContainer">
      <div className="authorContainer">
        <img src={author.avatar} alt='autor avatar' className="userImg" />
        <div className="postInfo">
          <span className="authorName">
            {author.name}
          </span>
          <span className="postDate">
            {date}
          </span>
        </div>
      </div>
      <div className="postContent">
        {content}
      </div>
    </div >
  );
}
