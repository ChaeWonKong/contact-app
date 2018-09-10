import React, { Component, Fragment } from "react";
import "../App.css";

export default class TitleForm extends Component {
  state = {
    title: "",
    text: ""
  };
  render() {
    return (
      <input
        className="titleText"
        type="text"
        placeholder="Title"
        onChange={this.handleInput}
        value={this.state.title}
      />
    );
  }
  handleInput = (title, text) => {
    this.setState(prevState => {
      const newState = {
        ...prevState,
        title: title,
        text: text
      };
      return newState;
    });
  };
}
