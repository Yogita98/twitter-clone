import React from "react";

const TrendingCard = ({ country, hashtag, tweetCount }) => {
  return (
    <div className="trending-card flex-column bottom-border">
      <div className="small-text light-font">Trending in {country}</div>
      <div className="big-text dark-font">{hashtag}</div>
      <div className="small-text light-font">{tweetCount} Tweets</div>
    </div>
  );
};

export default TrendingCard;
