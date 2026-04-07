import styles from "@/styles/sections/home/feed.module.scss";

const PostCreator = () => {
  return (
    <div className={styles["post-creator"]}>
      <input
        className={styles["post-creator__input"]}
        type="text"
        placeholder="Share notes, ask doubts, or post something..."
      />

      <div className={styles["post-creator__actions"]}>
        <button className={styles["post-creator__btn"]}>
          Upload Notes
        </button>

        <button className={styles["post-creator__btn"]}>
          Ask Question
        </button>

        <button
          className={`${styles["post-creator__btn"]} ${styles["primary"]}`}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default PostCreator;