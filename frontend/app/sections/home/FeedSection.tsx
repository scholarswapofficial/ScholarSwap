import FeedTabs from "@/components/molecules/FeedTabs/FeedTabs";
import PostCreator from "@/components/organisms/PostCreator/PostCreator";
import FeedList from "@/components/organisms/FeedList/FeedList";

import styles from "@/styles/sections/home/feed.module.scss";

const FeedSection = () => {
  return (
    <section className={styles.feed}>
      {/* Header */}
      <div className={styles["feed__header"]}>
        <FeedTabs />
      </div>

      {/* Creator */}
      <div className={styles["feed__creator"]}>
        <PostCreator />
      </div>

      {/* Posts */}
      <div className={styles["feed__list"]}>
        <FeedList />
      </div>
    </section>
  );
};

export default FeedSection;