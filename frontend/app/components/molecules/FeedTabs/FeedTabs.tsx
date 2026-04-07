import styles from "@/styles/sections/home/feed.module.scss";

const tabs = ["All", "Notes", "Questions", "Courses"];

const FeedTabs = () => {
  return (
    <div className={styles["feed-tabs"]}>
      <h2>Feed</h2>
      <div className={styles["feed-tabs__list"]}>
        {tabs.map((tab) => (
          <span key={tab}>{tab}</span>
        ))}
      </div>
    </div>
  );
};

export default FeedTabs;