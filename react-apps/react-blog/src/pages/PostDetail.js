import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import postPath from "../posts/2018-10-13.md";
import Layout from "../components/Layout";

class PostDetail extends Component {
  constructor(props) {
    super(props);

    this.state = { text: null };
  }

  componentWillMount() {
    fetch(postPath)
      .then(res => res.text())
      .then(text => {
        this.setState({ text });
      });
  }

  render() {
    console.log(this.state.text);
    return (
      <Layout>
        <div>
          <ReactMarkdown source={this.state.text} escapeHtml={false} />
        </div>
      </Layout>
    );
  }
}

export default PostDetail;
