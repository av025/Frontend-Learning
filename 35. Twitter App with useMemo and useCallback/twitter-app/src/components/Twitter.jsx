import { useState } from "react";
import { initialDummyTweet } from "../utility/utility";
import TweetList from "./TweetList";
import AddTweet from "./AddTweet";
import { v4 as uuidv4 } from "uuid";

export default function Twitter() {
  const [tweets, setTweets] = useState(initialDummyTweet);

const tweetId = uuidv4(); 

  const handleAddTweet = function (tweet) {
    setTweets([
      ...tweets,
      {
        id: tweetId,
        content: tweet,
        likeCount: Math.floor(Math.random() * 100000),
        createdAt: new Date().toUTCString()
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

  }; 

  const sortTweet = () => {
  const sortedTweets = [...tweets].sort((tOne, tTwo) => {
    const dateA = new Date(tOne.createdAt);
    const dateB = new Date(tTwo.createdAt);
    return dateB.getTime() - dateA.getTime(); 
  });

  setTweets(sortedTweets);
};


  return (
    <>
      <AddTweet onAddTweet={handleAddTweet} />
      <button onClick={sortTweet}>Sorted Tweet by Created At</button>
      <TweetList tweets={tweets} onEditTweet = {handleEditTweet} />
    </>
  );
}
