import Tweet from "./Tweet";

function TweetList({ tweets }) {
  return (
    <>
      <ul>
        {tweets.map((tweet) => {
          return (
            <li>
              <Tweet key={tweet.id} tweetContent={tweet.content} likesCount={tweet.likeCount} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TweetList;
