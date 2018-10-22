import React, { Component } from "react";
import DB from "../db/db.json";
import uuidv1 from "uuid/v1";
import fs from "fs";

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

    fs.readFile("../db/db.json", (err, data) => {
      if (err) throw err;
      let jsonData = JSON.stringify(this.state);

      fs.writeFile("../db/db.json", jsonData, err => {
        if (err) throw err;
        this.setState({
          ...JSON.stringify(jsonData)
        });
      });
    });
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <form onsubmit={this.onSubmit.bind(this)}>
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
