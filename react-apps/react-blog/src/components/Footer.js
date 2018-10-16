import React from "react";
import "./Footer.modules.css";
import { github } from "../images";

const Footer = () => (
  <footer className="page-footer">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="black-text">Leon Kong's Blog</h5>
          <p className="black-text text-lighten-4">
            Do or do not. There's no try. Web developer Leon Kong's Blog.
            Welcome!
          </p>
        </div>
        <div className="col l4 offset-l2 s12">
          <h5 className="black-text">Links</h5>
          <ul className="footer-ul">
            <li>
              <a className="black-text text-lighten-3" href="#!">
                ABOUT
              </a>
            </li>
            <li>
              <a className="black-text text-lighten-3" href="#!">
                DEVLOG
              </a>
            </li>
            <li>
              <a className="black-text text-lighten-3" href="#!">
                ALGORITHM
              </a>
            </li>
            <li>
              <a className="black-text text-lighten-3" href="#!">
                PROJECTS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
        © 2018 Copyright LeonKong
        <a
          className="black-text text-lighten-4 right"
          href="https://github.com/chaewonkong"
        >
          <img src={github} width="24px" alt="github" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
