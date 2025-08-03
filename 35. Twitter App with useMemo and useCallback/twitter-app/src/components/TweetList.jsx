import Tweet from "./Tweet";
import styles from "../style/tweet-list.module.css";

function TweetList({ tweets, onEditTweet }) {
  return (
    <>
      <ul className={styles.tweetList}>
        {tweets.map((tweet) => {
          return (
            <li className={styles.tweetLikeWrapper} key={tweet.id}>
              <Tweet
                key={tweet.id}
                tweetId = {tweet.id}
                tweetContent={tweet.content}
                likesCount={tweet.likeCount}
                createdAt={tweet.createdAt}
                onEdit={onEditTweet}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TweetList;
