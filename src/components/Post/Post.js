import React from 'react';
import PostHeader from '../PostHeader/PostHeader';

export default function Post({ key, data }) {
  return (
    <div>
      <PostHeader author={data.author} />
    </div>
  );
}
