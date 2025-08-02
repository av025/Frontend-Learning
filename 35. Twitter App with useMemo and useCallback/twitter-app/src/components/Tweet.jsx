import styles from "../style/tweet.module.css"

function Tweet({tweetContent, likesCount}) {
    return <div className={styles.tweetWrapper}>
      <div className={styles.tweetContent}>
        {tweetContent}
      </div>
      <div className={styles.tweet}>
       {likesCount} likes
      </div>
    </div>
}

export default Tweet; 