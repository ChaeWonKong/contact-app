import React, { Component, Fragment } from "react";
import "./App.css";
import TitleForm from "./components/TitleForm";

class App extends Component {
  state = {
    post: {
      title: "",
      content: ""
    }
  };
  render() {
    return (
      <Fragment>
        <div className="editor" />
        <div className="contents">
          <TitleForm />
          <textarea className="conText" placeholder="Write Text Here!" />
        </div>
        <div className="submit" />
      </Fragment>
    );
  }
  handleChange = e => {
    this.setState({
      [e.target.title]: e.target.value
    });
  };
}

export default App;
