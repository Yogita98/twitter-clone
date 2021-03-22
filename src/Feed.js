import React from "react";
import Home from "./Home";
import TweetsContainer from "./TweetsContainer";
import UserTweetComponent from "./UserTweetComponent";

const Feed = () => {
  return (
    <div className="feed">
      <Home />
      <UserTweetComponent />
      <TweetsContainer />
    </div>
  );
};

export default Feed;
