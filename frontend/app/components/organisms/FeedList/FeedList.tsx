import { useEffect, useState } from "react";

import { feedData } from "@/constant/home/feedData";
import { feedListText } from "@/constant/feed/feedList";

import PostCard from "../PostCard/PostCard";
import styles from "@/styles/sections/home/feed.module.scss";

const FeedList = () => {
  const [posts, setPosts] = useState<typeof feedData>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate API call
    const timer = setTimeout(() => {
      setPosts(feedData);
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  /* =========================
     LOADING STATE
  ========================= */
  if (loading) {
    return (
      <div className={styles["feed-list"]}>
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className={styles["post-card--skeleton"]} />
        ))}
      </div>
    );
  }

  /* =========================
     EMPTY STATE
  ========================= */
  if (!posts.length) {
    return (
      <div className={styles["feed-list__empty"]}>
        <p>{feedListText.empty}</p>
      </div>
    );
  }

  /* =========================
     NORMAL FEED
  ========================= */
  return (
    <div className={styles["feed-list"]}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default FeedList;