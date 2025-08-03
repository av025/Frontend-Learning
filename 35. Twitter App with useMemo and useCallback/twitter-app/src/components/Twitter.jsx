import { useState, useCallback, memo } from "react";
import { initialDummyTweet } from "../utility/utility";
import TweetList from "./TweetList";
import AddTweet from "./AddTweet";
import { v4 as uuidv4 } from "uuid"; 

const MemoisedAddTweet = memo(AddTweet)

export default function Twitter() {
  const [tweets, setTweets] = useState(initialDummyTweet);

const tweetId = uuidv4(); 

  const handleAddTweet = useCallback(function (tweet) {
    setTweets([
      ...tweets,
      {
        id: tweetId,
        content: tweet,
        likeCount: Math.floor(Math.random() * 100000),
        createdAt:new Date().toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
      },
    ]);
  }, [tweets]); 
 
  const handleEditTweet = useCallback(function(tweet) { 
    setTweets(
      tweets.map((currentTweet) => {
        if(currentTweet.id === tweet.id) {
            return tweet; 
        } else {
          return currentTweet; 
        }
      })
    )

  }, [tweets]); 

  const sortTweet = useCallback(() => {
  const sortedTweets = [...tweets].sort((tOne, tTwo) => {
    const dateA = new Date(tOne.createdAt);
    const dateB = new Date(tTwo.createdAt);
    return dateB.getTime() - dateA.getTime(); 
  });

  setTweets(sortedTweets);
}, []);


  return (
    <>
      <MemoisedAddTweet onAddTweet={handleAddTweet} />
      <button onClick={sortTweet}>Sorted Tweet by Created At</button>
      <TweetList tweets={tweets} onEditTweet = {handleEditTweet} />
    </>
  );
}
