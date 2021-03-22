import React from "react";

const TweetContent = ({ name, handle, time, tweetText }) => {
  return (
    <div className="flex-column tweet-content">
      <div className="tweet-user-info flex-row">
        <div className="username">{name}</div>
        <div className="user-handle">{handle}</div>
        <div className="period">.</div>
        <div className="tweet-created">{time}</div>
      </div>
      <div className="tweet-content small-text">
        <div>{tweetText}</div>
      </div>
      <div className="tweet-actions"></div>
    </div>
  );
};

export default TweetContent;
