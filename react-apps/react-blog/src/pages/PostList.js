import React, { Component } from "react";
import { dev1, dev2, dev3, dev4, dev5, dev6, python, react } from "../images";

class PostList extends Component {
  state = {};

  componentDidMount() {
    this._getPost();
  }

  _getPost = async () => {
    const posts = await this._fetchPost();
    this.setState({ ...posts });
  };

  _fetchPost() {
    return fetch("https://secret-lowlands-17494.herokuapp.com/posts")
      .then(res => res.json())
      .catch(err => console.log(err));
  }

  render() {
    const posts = this.state.posts
      ? this.state.posts.map(post => {
          return (
            <div key={post.id} className="col s12 m7">
              <div className="card horizontal">
                <div className="card-image">
                  <img
                    alt="pixabay-random"
                    src={`https://secret-lowlands-17494.herokuapp.com/images/${
                      post.thumbnailImage
                    }`}
                  />
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <div className="list-title-div">
                      <span className="list-title">{post.title}</span>
                      <span className="list-date">{post.date}</span>
                    </div>
                    <p className="list-content">{post.text}</p>
                  </div>
                  <div className="card-action">
                    <a href="/">This is a link</a>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      : "loading";
    return <div>{posts}</div>;
  }
}

export default PostList;
