import React, { Component } from "react";
import "./App.css";
import PostList from "./components/PostList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper">
              <a href="/" className="brand-logo">
                leonkong.com
              </a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <a href="/">HTML</a>
                </li>
                <li>
                  <a href="/">JavaScript</a>
                </li>
                <li>
                  <a href="/">Python</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <PostList />
      </div>
    );
  }
}

export default App;
