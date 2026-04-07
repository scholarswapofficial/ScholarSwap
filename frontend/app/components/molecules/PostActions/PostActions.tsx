import { FaHeart, FaComment, FaBookmark } from "react-icons/fa";
import styles from "@/styles/sections/home/feed.module.scss";

const PostActions = () => {
  return (
    <div className={styles["post-actions"]}>
      <div className={styles["post-actions__item"]}>
        <FaHeart />
        <span>Like</span>
      </div>

      <div className={styles["post-actions__item"]}>
        <FaComment />
        <span>Comment</span>
      </div>

      <div className={styles["post-actions__item"]}>
        <FaBookmark />
        <span>Save</span>
      </div>
    </div>
  );
};

export default PostActions;