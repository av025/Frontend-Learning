import { useState } from "react";

export default function AddTweet({onAddTweet}) {
  const [text, setText] = useState("");

  
  return (
    <>
      <input
        placeholder="Add new Tweet...."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => {
        onAddTweet(text)
        setText("")
      }}>Add Tweet</button>
    </>
  );
}
