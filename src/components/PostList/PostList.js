import React, { Component } from 'react';
import Post from '../Post/Post'
import './PostList.css'
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
          content: "Guys, anyone knows how to buy a ticket for the Tokyo Olympics ?",
          comments: [
            {
              id: 1,
              author: {
                name: "Jon Steeves",
                avatar: "https://randomuser.me/api/portraits/men/31.jpg"
              },
              content: "Hey, take a look at this link https://tokyo2020.org/en/games/ticket/ :)"
            },
            {
              id: 2,
              author: {
                name: "Meghan Jennings",
                avatar: "https://randomuser.me/api/portraits/women/63.jpg"
              },
              content: "Clairse, also, check this too https://www.nytimes.com/2019/10/01/travel/what-you-need-to-know-the-tokyo-2020-olympics.html"
            }
          ]
        },
        {
          id: 3,
          author: {
            name: "John C Salinas",
            avatar: "https://i.pravatar.cc/150?img=52"
          },
          date: "04 Jun 2019",
          content: "What is this Lorem ipsum thing ? ",
          comments: [
            {
              id: 3,
              author: {
                name: "Lyndsay J Berlin",
                avatar: "https://i.pravatar.cc/150?img=16"
              },
              content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
              id: 4,
              author: {
                name: "Cody J Walker",
                avatar: "https://fakepersongenerator.com/Face/male/male20161085978896667.jpg"
              },
              content: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups"
            },
          ]
        },
      ]
    }
  }
  render() {
    const { posts } = this.state
    return (
      <div className="PostListContainer">
        {posts.map(post => <Post key={post.id} data={post} />)}
      </div>
    )
  }
}
