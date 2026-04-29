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
        <div className={styles["post-creator__avatar"]}>U</div>

        <input
          className={styles["post-creator__input"]}
          type="text"
          placeholder="Share notes, ask doubts, or post something..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      {/* ACTIONS */}
      <div className={styles["post-creator__actions"]}>
        
        <div className={styles["post-creator__left-actions"]}>
          
          <button className={`${styles["post-creator__btn"]} ${styles["upload"]}`}>
            <FaRegFileAlt />
            Upload Notes
          </button>

          <button className={`${styles["post-creator__btn"]} ${styles["question"]}`}>
            <FaQuestionCircle />
            Ask Question
          </button>

          <button className={`${styles["post-creator__btn"]} ${styles["poll"]}`}>
            <MdPoll />
            Create Poll
          </button>

        </div>

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