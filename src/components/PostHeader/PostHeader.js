import React from 'react';
import './PostHeader.css'

export default function PostHeader({ author, date, content }) {
  return (
    <div className="postHeaderContainer">
      <div className="authorContainer">
        <img src={author.avatar} alt='autor avatar' className="authorImg" />
        <h4>
          {author.name}
        </h4>
      </div>
      <h5 >{date}</h5>
      <div>
        {content}
      </div>
    </div>
  );
}
