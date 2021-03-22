import React from "react";
import "./Layout.css";
import SideNav from "./SideNav";
import Feed from "./Feed";
import MiscComponent from "./MiscComponent";

const Layout = () => {
  return (
    <div className="grid-container">
      <div className="grid-item"></div>
      <div className="grid-item">
        <SideNav />
      </div>
      <div className="grid-item">
        <Feed />
      </div>
      <div className="grid-item">
        <MiscComponent />
      </div>
      <div className="grid-item"></div>
    </div>
  );
};

export default Layout;
