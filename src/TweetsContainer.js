import React from "react";
import TweetContent from "./TweetContent";
import twitterLogo from "./twitterLogo.svg";
import UserProfilePic from "./UserProfilePic";
import tweetImg from "./tweetImg.jpeg";

const TweetsContainer = () => {
  return (
    <div className="tweets-container three-sides">
      <div className="tweet-component flex-row bottom-border">
        <UserProfilePic image={twitterLogo} />
        <TweetContent
          name="Github"
          handle="@github"
          time="34m"
          tweetText="Meet Alexey @Tyrrrz Golub - the newest member of the GitHub Stars Program ⭐! Alexey is a developer focused on all things cloud, distributed systems, and web apps. He's also the Ukraine's first Star! Check out his full profile at https://stars.github.com/profiles/tyrrrz/"
          tweetImg={tweetImg}
        />
      </div>
      <div className="tweet-component flex-row bottom-border">
        <UserProfilePic image={twitterLogo} />
        <TweetContent
          name="Yogita Bhatia"
          handle="@Yogita98"
          time="13m"
          tweetText="It’s #WorldPoetryDay and the small poet in me was so hectic today that
          it couldn’t write a new poem but here are some of my favourite lines
          of a poem of mine Sparkles Do read"
        />
      </div>
      <div className="tweet-component flex-row bottom-border">
        <UserProfilePic image={twitterLogo} />
        <TweetContent
          name="Yogita Bhatia"
          handle="@Yogita98"
          time="13m"
          tweetText="It’s #WorldPoetryDay and the small poet in me was so hectic today that
          it couldn’t write a new poem but here are some of my favourite lines
          of a poem of mine Sparkles Do read"
          tweetImg={tweetImg}
        />
      </div>
      <div className="tweet-component flex-row bottom-border">
        <UserProfilePic image={twitterLogo} />
        <TweetContent
          name="Yogita Bhatia"
          handle="@Yogita98"
          time="13m"
          tweetText="It’s #WorldPoetryDay and the small poet in me was so hectic today that
          it couldn’t write a new poem but here are some of my favourite lines
          of a poem of mine Sparkles Do read"
          tweetImg={tweetImg}
        />
      </div>
      <div className="tweet-component flex-row">
        <UserProfilePic image={twitterLogo} />
        <TweetContent
          name="Yogita Bhatia"
          handle="@Yogita98"
          time="13m"
          tweetText="It’s #WorldPoetryDay and the small poet in me was so hectic today that
          it couldn’t write a new poem but here are some of my favourite lines
          of a poem of mine Sparkles Do read"
        />
      </div>
    </div>
  );
};

export default TweetsContainer;
