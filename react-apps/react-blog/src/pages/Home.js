import React, { Component } from "react";

import PostList from "./PostList";
import Layout from "../components/Layout";

class Home extends Component {
  render() {
    return (
      <Layout>
        <PostList />
      </Layout>
    );
  }
}

export default Home;
