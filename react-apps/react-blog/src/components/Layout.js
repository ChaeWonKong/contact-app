import React from "react";
import Header from "./Header";
import "./Layout.modules.css";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div>
    <Header />
    <div className="layout">
      <div className="layout-children">
        <div className="input-field col s12">
          <input id="search" type="text" className="validate" />
          <label htmlFor="search">Search Posts</label>
        </div>
        {children}
      </div>
    </div>
    <Footer />
  </div>
);

export default Layout;
