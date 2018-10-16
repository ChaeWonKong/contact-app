import React, { Component } from "react";
import { dev1, dev2, dev3, dev4, dev5, dev6, python, react } from "../images";

class PostList extends Component {
  render() {
    return (
      <div className="col s12 m7">
        <div className="card horizontal">
          <div className="card-image">
            <img alt="pixabay-random" src={react} />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <div className="list-title-div">
                <span className="list-title">React Router</span>
                <span className="list-date">2018-10-16</span>
              </div>
              <p className="list-content">
                This is all about React Router. Your life would have been much
                more complicated if you don't have react-router. React Router is
                a third-party library to enable routing in react apps.
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
