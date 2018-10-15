import React from "react";
import Header from "./Header";
import "./Layout.modules.css";

const Layout = ({ children }) => (
  <div>
    <Header />
    <div className="layout">
      <div className="layout-children">{children}</div>
    </div>
  </div>
);

export default Layout;
