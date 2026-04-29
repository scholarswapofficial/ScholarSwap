import PostHeader from "@/components/molecules/PostHeader/PostHeader";
import PostActions from "@/components/molecules/PostActions/PostActions";

import styles from "@/styles/sections/home/feed.module.scss";

type Post = {
  id: number;
  author?: {
    name?: string;
    avatar?: string;
    verified?: boolean;
    time?: string;
  };
  content: {
    title?: string;
    description: string;
  };
  tags?: string[];
  media?: {
    type: "image" | "pdf";
    url: string;
    label?: string;
  };
  stats?: {
    likes: number;
    comments: number;
    views: number;
  };
};

type PostCardProps = {
  post: Post;
};

const PostCard = ({ post }: PostCardProps) => {
  const authorName = post.author?.name || "Unknown";
  const authorTime = post.author?.time || "";
  const authorAvatar = post.author?.avatar;

  return (
    <div className={styles["post-card"]}>
      
      {/* Header */}
      <PostHeader
        user={authorName}
        time={authorTime}
        avatar={authorAvatar} // make sure PostHeader accepts this
      />

      {/* Content */}
      <div className={styles["post-card__content"]}>
        
        {post.content?.title && (
          <h3 className={styles["post-card__title"]}>
            {post.content.title}
          </h3>
        )}

        <p className={styles["post-card__description"]}>
          {post.content.description}
        </p>
      </div>

      {/* Tags */}
      {post.tags?.length ? (
        <div className={styles["post-card__tags"]}>
          {post.tags.map((tag, index) => (
            <span key={index} className={styles["post-card__tag"]}>
              #{tag}
            </span>
          ))}
        </div>
      ) : null}

      {/* Media Preview */}
      {post.media?.url && (
        <div className={styles["post-card__media"]}>
          <img
            src={post.media.url}
            alt="post media"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          {post.media.label && (
            <span className={styles["post-card__media-label"]}>
              {post.media.label}
            </span>
          )}
        </div>
      )}

      {/* Actions */}
      <PostActions stats={post.stats} />

    </div>
  );
};

export default PostCard;