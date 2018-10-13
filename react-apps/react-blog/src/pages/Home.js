import React, { Component } from "react";

import Header from "../components/Header";
import PostList from "./PostList";
import About from "./About";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <PostList />
      </div>
    );
  }
}

export default Home;
