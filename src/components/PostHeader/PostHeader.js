import React from 'react';

export default function PostHeader({ author }) {
  return (
    <div>
      <img src={author.avatar} alt='autor avatar' />
      <h4>
        {author.name}
      </h4>
    </div>
  );
}
