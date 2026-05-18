import FeedTabs from "@/components/molecules/FeedTabs/FeedTabs";
import PostCreator from "@/components/organisms/PostCreator/PostCreator";
import FeedList from "@/components/organisms/FeedList/FeedList";

import { feedLayoutConfig } from "@/constant/feed/feedlayout";

import styles from "@/styles/sections/home/feed.module.scss";

const FeedSection = () => {
  const {   showTabs,  showCreator,  showFeed,   containerClass,} = feedLayoutConfig;

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