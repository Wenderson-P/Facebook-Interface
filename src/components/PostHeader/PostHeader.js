import React from 'react';
import './PostHeader.css'

export default function PostHeader({ author, date, content }) {
  return (
    <div className="postHeaderContainer">
      <div className="authorContainer">
        <img src={author.avatar} alt='autor avatar' className="authorImg" />
        <div className="postInfo">
          <span className="authorName">
            {author.name}
          </span>
          <span className="postDate">
            {date}
          </span>
        </div>
      </div>
      <div>
        <text className="postContent">
          {content}
        </text>
      </div>
    </div>
  );
}
