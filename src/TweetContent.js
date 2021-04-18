import React from "react";
// import likeIcon from "./like.svg";

const TweetContent = ({ name, handle, time, tweetText, tweetImg }) => {
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
      {tweetImg && (
        <div className="tweet-img">
          <img src={tweetImg} alt="" />
        </div>
      )}
      {/* <div className="actions-container flex-row">
        <div className="tweet-action flex-row">
          <div className="tweet-action-icon">
            <img src={likeIcon} alt="" style={{ width: "20px" }} />
          </div>
          <div className="tweet-action-count light-font small-text">2</div>
        </div>
      </div> */}
    </div>
  );
};

export default TweetContent;
