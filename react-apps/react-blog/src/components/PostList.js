import React, { Component } from "react";

class PostList extends Component {
  render() {
    return (
      <div class="col s12 m7">
        <div class="card horizontal">
          <div class="card-image">
            <img src="https://cdn.pixabay.com/photo/2017/05/29/16/42/woman-2354157_1280.jpg" />
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <p>
                I am a very simple card. I am good at containing small bits of
                information.
              </p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostList;
