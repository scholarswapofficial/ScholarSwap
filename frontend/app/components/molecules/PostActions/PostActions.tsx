import { useState } from "react";
import {
  FaHeart,
  FaComment,
  FaBookmark,
} from "react-icons/fa";

import { feedActionText } from "@/constant/feed/uiText";
import styles from "@/styles/sections/home/feed.module.scss";

type PostActionsProps = {
  stats?: {
    likes: number;
    comments: number;
    views: number;
  };

  onCommentClick?: () => void;
};

const PostActions = ({
  stats,
  onCommentClick,
}: PostActionsProps) => {
  const [liked, setLiked] =
    useState(false);

  const [saved, setSaved] =
    useState(false);

  const handleLike = () => {
    setLiked((prev) => !prev);
  };

  const handleSave = () => {
    setSaved((prev) => !prev);
  };

  return (
    <div
      className={
        styles["post-actions"]
      }
    >
      {/* LIKE */}
      <div
        className={
          styles[
            "post-actions__item"
          ]
        }
        onClick={handleLike}
      >
        <FaHeart
          color={
            liked
              ? "#ef4444"
              : ""
          }
        />

        <span>
          {feedActionText.like}

          {stats?.likes !==
            undefined &&
            ` (${
              stats.likes +
              (liked ? 1 : 0)
            })`}
        </span>
      </div>

      {/* COMMENT */}
      <div
        className={
          styles[
            "post-actions__item"
          ]
        }
        onClick={
          onCommentClick
        }
      >
        <FaComment />

        <span>
          {
            feedActionText.comment
          }

          {stats?.comments !==
            undefined &&
            ` (${stats.comments})`}
        </span>
      </div>

      {/* SAVE */}
      <div
        className={
          styles[
            "post-actions__item"
          ]
        }
        onClick={handleSave}
      >
        <FaBookmark
          color={
            saved
              ? "#2563eb"
              : ""
          }
        />

        <span>
          {feedActionText.save}
        </span>
      </div>
    </div>
  );
};

export default PostActions;