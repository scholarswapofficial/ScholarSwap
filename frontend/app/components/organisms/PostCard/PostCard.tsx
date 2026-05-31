import { useState } from "react";
import styles from "@/styles/sections/home/feed.module.scss";
import PostHeader from "@/components/molecules/PostHeader/PostHeader";
import PostActions from "@/components/molecules/PostActions/PostActions";
import { PostInterface } from "@/interface/post.interface";
import { timeAgo } from "@/utils/timeAgo";

type PostCardProps = {
  post: PostInterface;
};

const PostCard = ({ post }: PostCardProps) => {
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [comment, setComment] = useState("");

  const handlePostLike=()=>{
    console.log("Liked post:", post._id);
  }
  const handlePostComment=()=>{
    console.log("Commented on post:", post._id);
  }
  // Handle author (populated or not)
  const authorName =
    typeof post.author === "object"
      ? post.author?.name || "Unknown"
      : "Unknown";

  const authorAvatar =
    typeof post.author === "object"
      ? post.author?.avatar
      : undefined;

  const handleCommentPost = () => {
    if (!comment.trim()) return;

    console.log("Comment:", comment);
    setComment("");
    setShowCommentBox(false);
  };

  return (
    <div className={styles["post-card"]}>
      
      {/* Header */}
      <PostHeader
        user={authorName}
        time={timeAgo(post.createdAt)}
        avatar={authorAvatar}
      />

      {/* Content */}
      <div className={styles["post-card__content"]}>
        {post.title && (
          <h3 className={styles["post-card__title"]}>
            {post.title}
          </h3>
        )}

        <p className={styles["post-card__description"]}>
          {post.content}
        </p>
      </div>

      {/* Tags */}
      {post.tags?.length > 0 && (
        <div className={styles["post-card__tags"]}>
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className={styles["post-card__tag"]}
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Actions */}
      <PostActions
        stats={{
          likes: post.likesCount,
          comments: post.commentsCount,
          views: 0, // not in schema yet
        }}
        onCommentClick={() =>
          setShowCommentBox(!showCommentBox)
        }
        onLikeClick={handlePostLike}
        onPostComment={handlePostComment}
      />

      {/* Comment Box */}
      {showCommentBox && (
        <div className={styles["post-card__comment-box"]}>
          <textarea
            placeholder="Write a comment..."
            value={comment}
            onChange={(e) =>
              setComment(e.target.value)
            }
          />

          <button
            className={styles["post-card__comment-post"]}
            onClick={handleCommentPost}
          >
            Post
          </button>
        </div>
      )}
    </div>
  );
};

export default PostCard;