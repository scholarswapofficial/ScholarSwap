import FeedTabs from "@/components/molecules/FeedTabs/FeedTabs";
import PostCreator from "@/components/organisms/PostCreator/PostCreator";
import FeedList from "@/components/organisms/FeedList/FeedList";
import {useEffect, useState} from 'react'; 
import {fetchPosts} from "@/utils/apiCallFunctions";
import { feedLayoutConfig } from "@/constant/feed/feedlayout";

import styles from "@/styles/sections/home/feed.module.scss";

const FeedSection = () => {
  const {   showTabs,  showCreator,  showFeed,   containerClass,} = feedLayoutConfig;
const [posts, setPosts] = useState([]);
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
        console.log("err:", err);
      } finally {
        setLoading(false);
      }
    };
    getPosts();
  }, []);


  return (
    <section className={`${styles.feed} ${styles[containerClass]}`}>
      {showTabs && (
        <div className={styles.feed__header}>
          <FeedTabs />
        </div>
      )}

      {showCreator && (
        <div className={styles.feed__creator}>
          <PostCreator />
        </div>
      )}

      {showFeed && (
        <div className={styles.feed__list}>
          <FeedList />
        </div>
      )}

    </section>
  );
};

export default FeedSection;