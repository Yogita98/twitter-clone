import React from "react";

const NavItem = ({ icon, text }) => {
  return (
    <div className="navitem">
      <a href="" className="flex-item flex-row">
        <img className="navitem-icon" src={icon} alt="home icon" />
        <span className="navitem-text">{text}</span>
      </a>
    </div>
  );
};

export default NavItem;
