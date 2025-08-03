import { useState } from "react";
import { initialDummyTweet } from "../utility/utility";
import TweetList from "./TweetList";
import AddTweet from "./AddTweet";

export default function Twitter() {
  const [tweets, setTweets] = useState(initialDummyTweet);

  let nextTweetID = tweets.length > 0 ? tweets[tweets.length - 1].id : 0;

  const handleAddTweet = function (tweet) {
    setTweets([
      ...tweets,
      {
        id: nextTweetID,
        content: tweet,
        likeCount: Math.floor(Math.random() * 100000),
        createdAt: new Date().toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
      },
    ]);
  }; 
 
  const handleEditTweet = function(tweet) { 
    setTweets(
      tweets.map((currentTweet) => {
        if(currentTweet.id === tweet.id) {
            return tweet; 
        } else {
          return currentTweet; 
        }
      })
    )

  }

  return (
    <>
      <AddTweet onAddTweet={handleAddTweet} />
      <TweetList tweets={tweets} onEditTweet = {handleEditTweet} />
    </>
  );
}
