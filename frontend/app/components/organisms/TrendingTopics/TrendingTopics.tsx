import { FaFire } from "react-icons/fa";

import styles from "@/styles/sections/home/rightpanel.module.scss";

const topics = [
  { id: 1, tag: "DSA", posts: "1,234", trend: "up" },
  { id: 2, tag: "System Design", posts: "856", trend: "up" },
  { id: 3, tag: "Operating Systems", posts: "642", trend: "down" },
  { id: 4, tag: "Database", posts: "512", trend: "up" },
  { id: 5, tag: "OOPs", posts: "410", trend: "down" },
];

const TrendingTopics = () => {
  return (
    <div className={styles.card}>
      
      <div className={styles.card__header}>
        <div className={styles.card__title}>
          <FaFire /> Trending Topics
        </div>
        <span className={styles.card__link}>View all</span>
      </div>

      <div className={styles.trending}>
        {topics.map((item, index) => (
          <div key={item.id} className={styles.trending__item}>
            
            <div className={styles.trending__left}>
              <span className={styles.trending__rank}>{index + 1}</span>
              
              <div>
                <p className={styles.trending__tag}>#{item.tag}</p>
                <span className={styles.trending__posts}>
                  {item.posts} posts
                </span>
              </div>
            </div>

            <span
              className={
                item.trend === "up"
                  ? styles.trending__up
                  : styles.trending__down
              }
            >
              ↗
            </span>

          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingTopics;