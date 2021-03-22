import React from "react";
import twitterLogo from "./twitterLogo.svg";
import homeIcon from "./home.svg";
import bookmarkIcon from "./bookmark.svg";
import messageIcon from "./message.svg";
import hashtagIcon from "./hashtag.svg";
import notificationIcon from "./notification.png";
import listIcon from "./list.svg";
import moreIcon from "./more.svg";
import profileIcon from "./profile.svg";
import NavItem from "./NavItem";

const SideNav = () => {
  return (
    <div className="side-nav">
      <NavItem icon={twitterLogo} text="" />
      <NavItem icon={homeIcon} text="Home" />
      <NavItem icon={hashtagIcon} text="Explore" />
      <NavItem icon={notificationIcon} text="Notifications" />
      <NavItem icon={messageIcon} text="Messages" />
      <NavItem icon={bookmarkIcon} text="Bookmarks" />
      <NavItem icon={listIcon} text="Lists" />
      <NavItem icon={profileIcon} text="Profile" />
      <NavItem icon={moreIcon} text="More" />

      <button className="btn-tweet">Tweet</button>
    </div>
  );
};

export default SideNav;
