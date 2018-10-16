import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import postPath from "../posts/2018-10-13.md";

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
    return (
      <div>
        <p>this is a Post detail</p>
        <ReactMarkdown source={this.state.text} escapeHtml={false} />
      </div>
    );
  }
}

export default PostDetail;
