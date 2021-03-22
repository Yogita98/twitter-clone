import React from "react";
import MiscRoundedContainer from "./MiscRoundedContainer";
import Search from "./Search";
import TrendingCard from "./TrendingCard";

const MiscComponent = () => {
  return (
    <div className="misc-component flex-column">
      <Search />
      <MiscRoundedContainer header="What's happening">
        <TrendingCard country="India" hashtag="chanakya" tweetCount="2,264" />
        <TrendingCard country="India" hashtag="chanakya" tweetCount="2,264" />
        <TrendingCard country="India" hashtag="chanakya" tweetCount="2,264" />
        <TrendingCard country="India" hashtag="chanakya" tweetCount="2,264" />
        <TrendingCard country="India" hashtag="chanakya" tweetCount="2,264" />
        <TrendingCard country="India" hashtag="chanakya" tweetCount="2,264" />
        <TrendingCard country="India" hashtag="chanakya" tweetCount="2,264" />
      </MiscRoundedContainer>

      <MiscRoundedContainer header="Who to follow">
        <div className="trending-card flex-column bottom-border">
          <div className="small-text light-font">Trending in India</div>
          <div className="big-text dark-font">chanakya</div>
          <div className="small-text light-font">2,623 Tweets</div>
        </div>
      </MiscRoundedContainer>

      <div className="footer"></div>
    </div>
  );
};

export default MiscComponent;
