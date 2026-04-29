import styles from "@/styles/sections/home/feed.module.scss";

type PostHeaderProps = {
  user: string;
  time: string;
  avatar?: string;
  verified?: boolean;
};

const PostHeader = ({
  user,
  time,
  avatar,
  verified = false,
}: PostHeaderProps) => {
  return (
    <div className={styles["post-header"]}>
      
      {/* LEFT */}
      <div className={styles["post-header__left"]}>
        
        {/* Avatar */}
        <div className={styles["post-header__avatar"]}>
          {avatar ? (
            <img src={avatar} alt="avatar" />
          ) : (
            <span>{user?.charAt(0).toUpperCase()}</span>
          )}
        </div>

        {/* User Info */}
        <div className={styles["post-header__info"]}>
          <div className={styles["post-header__name-row"]}>
            <p className={styles["post-header__user"]}>{user}</p>

            {verified && (
              <span className={styles["post-header__verified"]}>✔</span>
            )}
          </div>

          <span className={styles["post-header__time"]}>{time}</span>
        </div>
      </div>

      {/* RIGHT (More Options) */}
      <div className={styles["post-header__right"]}>
        <span className={styles["post-header__menu"]}>•••</span>
      </div>
    </div>
  );
};

export default PostHeader;