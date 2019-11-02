import React from 'react';
import PostHeader from '../PostHeader/PostHeader';
import './Post.css'
export default function Post({ key, data }) {
  return (
    <div className="postContainer">
      <div className="postData">
        <PostHeader
          author={data.author}
          date={data.date}
          content={data.content} />
        <div className="split"></div>
      </div>
    </div>
  );
}
