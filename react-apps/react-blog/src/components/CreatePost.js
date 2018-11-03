import React, { Component } from "react";

class CreatePost extends Component {
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
