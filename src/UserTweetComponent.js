import React from "react";
import twitterLogo from "./twitterLogo.svg";

const UserTweetComponent = () => {
  return (
    <div className="tweet-component flex-row three-sides">
      <img
        alt="profile-pic"
        className="ui avatar circular image profile-pic"
        src={twitterLogo}
      />
      <div className="flex-column tweet-content">
        <textarea placeholder="What's happening?" className="txta"></textarea>

        <div className="tweet-visibility"> Everyone can reply </div>
      </div>
    </div>
  );
};

export default UserTweetComponent;
