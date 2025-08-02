import Tweet from "./Tweet";
import styles from "../style/tweet-list.module.css"

function TweetList({ tweets }) {
  return (
    <>
      <ul className={styles.tweetList}>
        {tweets.map((tweet) => {
          return (
            <li className={styles.tweetLikeWrapper}>
              <Tweet key={tweet.id} tweetContent={tweet.content} likesCount={tweet.likeCount} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TweetList;
