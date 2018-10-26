import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import PostDetail from "./pages/PostDetail";
import CreatePost from "./components/CreatePost";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/posts/:pageId" component={PostDetail} />
        <Route path="/new" component={CreatePost} />
      </div>
    );
  }
}

export default App;
