"use client";

import { useState } from "react";
import { FaRegFileAlt, FaQuestionCircle } from "react-icons/fa";
import { MdPoll } from "react-icons/md";
import { IoSend } from "react-icons/io5";

import styles from "@/styles/sections/home/feed.module.scss";

const PostCreator = () => {
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (!content.trim()) return;
    console.log("Post:", content);
    setContent("");
  };

  return (
    <div className={styles["post-creator"]}>
      
      {/* TOP */}
      <div className={styles["post-creator__top"]}>

        <input
          className={styles["post-creator__input"]}
          type="text"
          placeholder="Share Your ideas, Thoughts and Ask Questions..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      {/* ACTIONS */}
      <div className={styles["post-creator__actions"]}>
        
        

        <button
          onClick={handleSubmit}
          disabled={!content.trim()}
          className={`${styles["post-creator__btn"]} ${styles["primary"]}`}
        >
          <IoSend />
          Post
        </button>
      </div>
    </div>
  );
};

export default PostCreator;