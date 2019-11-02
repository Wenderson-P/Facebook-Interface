import React, { Component } from 'react';
import Post from '../Post/Post'

export default class PostList extends Component {


  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          author: {
            name: "Claire Watts",
            avatar: "https://randomuser.me/api/portraits/women/8.jpg"
          },
          date: "04 Jun 2019",
          content: "Guys, anyone knows how to buy a ticket for the Tokyo Olympics",
          comments: [
            {
              id: 1,
              author: {
                name: "Jon Steeves",
                avatar: "https://randomuser.me/api/portraits/men/31.jpg"
              },
              content: "Hey, take a look at this link https://tokyo2020.org/en/games/ticket/ :)"
            }
          ]
        },
      ]
    }
  }
  render() {
    const { posts } = this.state
    return (
      <div>
        {posts.map(post => <Post key={post.id} data={post} />)}
      </div>
    )
  }
}
