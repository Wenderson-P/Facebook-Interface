import React from 'react';
import './PostComment.css'

export default function PostComment({ key, author, content }) {
  return (
    <div className="postCommentContainer">
      <img src={author.avatar}
        alt="avatar usuario"
        className="userImg"
      />
      <div className="comment">
        <p className="postContent">
          <span className="authorName">{author.name}&nbsp;</span>
          {content}
        </p>
      </div>
    </div>
  );
}
