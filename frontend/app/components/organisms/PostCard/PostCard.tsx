import PostHeader from "@/components/molecules/PostHeader/PostHeader";
import PostActions from "@/components/molecules/PostActions/PostActions";

import styles from "@/styles/sections/home/feed.module.scss";

type PostProps = {
  post: {
    user: string;
    time: string;
    content: string;
  };
};

const PostCard = ({ post }: PostProps) => {
  return (
    <div className={styles["post-card"]}>
      <PostHeader user={post.user} time={post.time} />

      <div className={styles["post-card__content"]}>
        <p>{post.content}</p>
      </div>

      <PostActions />
    </div>
  );
};

export default PostCard;