function Tweet({tweetContent, likesCount}) {
    return <>
      <div className="tweet-content">
        {tweetContent}
      </div>
      <div className="likes">
       {likesCount} likes
      </div>
    </>
}

export default Tweet; 