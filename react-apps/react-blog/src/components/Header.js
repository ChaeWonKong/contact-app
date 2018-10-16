import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.modules.css";

class Header extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              leonkong.com
            </Link>

            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
              <li>
                <Link to="/">DEVLOG</Link>
              </li>
              <li>
                <Link to="/">ALGORITHM</Link>
              </li>
              <li>
                <Link to="/">PROJECTS</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
