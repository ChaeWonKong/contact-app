import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    );
  }
}

export default App;
