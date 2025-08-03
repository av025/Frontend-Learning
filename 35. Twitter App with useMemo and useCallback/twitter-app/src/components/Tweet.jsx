import { useState } from "react";
import styles from "../style/tweet.module.css";

function Tweet({ tweetId,  tweetContent, likesCount, createdAt, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className={styles.tweetWrapper}>
      <div className={styles.tweetContentWrapper}>

      <div className={styles.tweetContent}>
        {isEditing ? <input  value={tweetContent} onChange={ (e) => {
           onEdit({
            id:tweetId, 
            content : e.target.value, 
            likesCount : likesCount,
            createdAt : createdAt
           })
        }} /> :  tweetContent }
      </div> 
      <div>
        <button onClick={( ) => setIsEditing(!isEditing)}> 
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
      </div>

      <div className={styles.likesCreatedAtWrapper}>
        <div className={styles.likes}>{likesCount} likes</div>
        <div className={styles.createdAt}>
          <b>Tweeted at</b> {createdAt}
        </div>
      </div>
    </div>
  );
}

export default Tweet;
