import React from "react";
import MiscRoundedContainer from "./MiscRoundedContainer";
import Search from "./Search";
import TrendingCard from "./TrendingCard";
import UserProfilePic from "./UserProfilePic";
import twitterLogo from "./twitterLogo.svg";

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
        <div className="trending-card flex-row bottom-border">
          <UserProfilePic image={twitterLogo} />
          <div className="user-details">
            <div className="big-text dark-font">boAt</div>
            <div className="big-text light-font">@BoatNirvana</div>
          </div>
          <div className="follow">
            <button className="light-button big-text dark-font">Follow</button>
          </div>
        </div>
        <div className="trending-card flex-row bottom-border">
          <UserProfilePic image={twitterLogo} />
          <div className="user-details">
            <div className="big-text dark-font">boAt</div>
            <div className="big-text light-font">@BoatNirvana</div>
          </div>
          <div className="follow">
            <button className="light-button big-text dark-font">Follow</button>
          </div>
        </div>
        <div className="trending-card flex-row bottom-border">
          <UserProfilePic image={twitterLogo} />
          <div className="user-details">
            <div className="big-text dark-font">boAt</div>
            <div className="big-text light-font">@BoatNirvana</div>
          </div>
          <div className="follow">
            <button className="light-button big-text dark-font">Follow</button>
          </div>
        </div>
      </MiscRoundedContainer>

      <div className="footer flex-row ">
        <a href="" className="small-text light-font">
          Terms of Service
        </a>
        <a href="" className="small-text light-font">
          Privacy Policy
        </a>
        <a href="" className="small-text light-font">
          Cookie Policy
        </a>
        <a href="" className="small-text light-font">
          Ads info
        </a>
        <a href="" className="small-text light-font">
          More...
        </a>
        <a href="" className="small-text light-font">
          © 2021
        </a>
        <a href="" className="small-text light-font">
          Twitter, Inc.
        </a>
      </div>
    </div>
  );
};

export default MiscComponent;
