import styles from "@/styles/sections/home/feed.module.scss";

type PostHeaderProps = {
  user: string;
  time: string;
};

const PostHeader = ({ user, time }: PostHeaderProps) => {
  return (
    <div className={styles["post-header"]}>
      <div className={styles["post-header__left"]}>
        <div className={styles["post-header__avatar"]}></div>
        <div>
          <p className={styles["post-header__user"]}>{user}</p>
          <span className={styles["post-header__time"]}>{time}</span>
        </div>
      </div>

      <div className={styles["post-header__right"]}>
        •••
      </div>
    </div>
  );
};

export default PostHeader;