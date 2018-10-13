import React, { Component } from "react";

class PostList extends Component {
  render() {
    return (
      <div className="col s12 m7">
        <div className="card horizontal">
          <div className="card-image">
            <img
              alt="pixabay-random"
              src="https://source.unsplash.com/random/300x200"
            />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p>
                I am a very simple card. I am good at containing small bits of
                information.
              </p>
            </div>
            <div className="card-action">
              <a href="/">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostList;
