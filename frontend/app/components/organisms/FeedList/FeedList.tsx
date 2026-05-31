"use client"; 

import { useEffect, useState } from "react";

import { feedData } from "@/constant/home/feedData";
import { feedListText } from "@/constant/feed/feedList";

import PostCard from "../PostCard/PostCard";
import styles from "@/styles/sections/home/feed.module.scss";
import {fetchPosts} from "@/utils/apiCallFunctions";
import {  toast } from 'react-toastify';
import {PostInterface} from "@/interface/post.interface"
import {notify } from "@/components/Toast/toast";

const FeedList = () => {
 

  const [posts, setPosts] = useState<PostInterface[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);




 useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true);
        const fetchedData = await fetchPosts({
          page: 1
        });
        setPosts(fetchedData.data);
        console.log("Fetched posts:", fetchedData.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
          notify.error("Failed to load posts. Please try again.");
        console.log("err:",  err );
      } finally {
        setLoading(false);
      }
    };
    getPosts();
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

  // /* =========================
  //    EMPTY STATE
  // ========================= */
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
        <PostCard key={post._id} post={post} />
      ))}

    </div>
  );
};

export default FeedList;