import React from "react";

const MiscRoundedContainer = ({ header, children }) => {
  return (
    <div className="rounded-container flex-column">
      <div className="header bottom-border">{header}</div>
      {children}
      <div className="show-more-component big-text">Show more</div>
    </div>
  );
};

export default MiscRoundedContainer;
