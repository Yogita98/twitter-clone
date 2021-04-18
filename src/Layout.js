import React from "react";
import "./Layout.css";
import SideNav from "./SideNav";
import Feed from "./Feed";
import MiscComponent from "./MiscComponent";

const Layout = () => {
  return (
    <div className="flex-container">
      <div className="flex-container-item one"></div>
      <div className="flex-container-item two">
        <SideNav />
      </div>
      <div className="flex-container-item three">
        <Feed />
      </div>
      <div className="flex-container-item four">
        <MiscComponent />
      </div>
      <div className="flex-container-item five"></div>
    </div>
  );
};

export default Layout;
