import { v4 as uuidv4 } from "uuid";

export const initialDummyTweet = [
  {
    id:uuidv4(),
    content: "We have a twitter called as threads",
    likeCount: 5,
    createdAt: new Date().toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
  },
  {
    id:uuidv4(),
    content: "What should be post ?",
    likeCount: 4,
    createdAt: new Date().toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
  },
  {
    id: uuidv4(),
    content: "What is up with tech community",
    likeCount: 3,
    createdAt: new Date().toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
  },
];
