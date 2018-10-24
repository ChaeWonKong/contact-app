import React, { Component } from "react";
import DB from "../db/db.json";
import uuidv1 from "uuid/v1";
const fs = require("fs");

class CreatePost extends Component {
  state = {
    ...JSON.stringify(DB)
  };

  onSubmit(event) {
    event.preventDefault();

    this.setState({
      ...this.state,
      date: new Date().toLocaleString(),
      id: uuidv1
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input
            type="text"
            onChange={event =>
              this.setState({ ...this.state, title: event.target.value })
            }
          />
          <textarea
            name="text"
            onChange={event =>
              this.setState({ ...this.state, text: event.target.value })
            }
          />
        </form>
      </div>
    );
  }
}

export default CreatePost;
