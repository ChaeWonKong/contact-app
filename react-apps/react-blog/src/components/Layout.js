import React from "react";
import Header from "./Header";
import "./Layout.modules.css";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div>
    <Header />
    <div className="layout">
      <div className="layout-children">{children}</div>
    </div>
    <Footer />
  </div>
);

export default Layout;
