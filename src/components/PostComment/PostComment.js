import React from 'react';

export default function PostComment({ key, author, content }) {
  return (
    <div className="postCommentContainer">
      <img src={author.avatar} alt="avatar usuario" />
      <div className="comment">
        <text>
          <span>{author.name} </span>
          {content}
        </text>
      </div>
    </div>
  );
}
