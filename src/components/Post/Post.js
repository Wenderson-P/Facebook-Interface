import React from 'react';
import PostHeader from '../PostHeader/PostHeader';

export default function Post({ key, data }) {
  return (
    <div>
      <PostHeader author={data.author} />
      <h5>{data.date}</h5>
      <div>
        {data.content}
      </div>
    </div>
  );
}
