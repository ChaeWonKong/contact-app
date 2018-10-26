import React, { Component } from "react";
import Layout from "../components/Layout";

class PostDetail extends Component {
  state = {};

  componentDidMount() {
    this._getPost();
  }

  _getPost = async () => {
    const post = await this._fetchPost();
    this.setState({ ...post });
  };

  _fetchPost() {
    const pageId = this.props.match.params.pageId;
    return fetch(`https://secret-lowlands-17494.herokuapp.com/posts/${pageId}`)
      .then(res => res.json())
      .catch(err => console.log(err));
  }

  render() {
    const { id, thumbnailImage, title, date, text } = this.state;
    console.log(this.props);
    return (
      <Layout>
        {this.state.id ? (
          <div>
            <h1>{title}</h1>
            <h3>{date}</h3>
            <img
              src={`https://secret-lowlands-17494.herokuapp.com/images/${thumbnailImage}`}
              width="500px"
            />
            <p>{text}</p>
          </div>
        ) : (
          <div>loading</div>
        )}
      </Layout>
    );
  }
}

export default PostDetail;
