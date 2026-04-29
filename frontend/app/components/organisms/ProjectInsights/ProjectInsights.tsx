"use client";

import styles from "@/styles/sections/friend/projectInsights.module.scss";
import {
  FaFolderOpen,
  FaBookmark,
  FaCode,
  FaUsers,
} from "react-icons/fa";

const ProjectInsights = () => {
  return (
    <div className={styles["wrapper"]}>
      
      {/* ================= STATS ================= */}
      <div className={styles["card"]}>
        <div className={styles["header"]}>
          <h3>Your Project Stats</h3>
          <span>View all</span>
        </div>

        <div className={styles["stats"]}>
          <div className={styles["stat"]}>
            <FaFolderOpen />
            <div>
              <h4>8</h4>
              <p>My Projects</p>
            </div>
          </div>

          <div className={styles["stat"]}>
            <FaBookmark />
            <div>
              <h4>24</h4>
              <p>Saved</p>
            </div>
          </div>

          <div className={styles["stat"]}>
            <FaCode />
            <div>
              <h4>5</h4>
              <p>Contributions</p>
            </div>
          </div>

          <div className={styles["stat"]}>
            <FaUsers />
            <div>
              <h4>3</h4>
              <p>Requests</p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CATEGORIES ================= */}
      <div className={styles["card"]}>
        <div className={styles["header"]}>
          <h3>Popular Categories</h3>
          <span>View all</span>
        </div>

        <div className={styles["list"]}>
          {[
            ["Web Development", "1,245"],
            ["Artificial Intelligence", "832"],
            ["Mobile Development", "567"],
            ["Data Science", "458"],
            ["DevOps", "312"],
          ].map(([name, count], i) => (
            <div key={i} className={styles["list-item"]}>
              <span>{name}</span>
              <span>{count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ================= COLLECTIONS ================= */}
      <div className={styles["card"]}>
        <div className={styles["header"]}>
          <h3>Featured Collections</h3>
          <span>View all</span>
        </div>

        <div className={styles["collections"]}>
          <div className={styles["collection"]}>
            <h4>Beginner Projects</h4>
            <p>250+ projects</p>
          </div>

          <div className={styles["collection"]}>
            <h4>College Projects</h4>
            <p>650+ projects</p>
          </div>

          <div className={styles["collection"]}>
            <h4>Final Year Projects</h4>
            <p>400+ projects</p>
          </div>
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className={styles["cta"]}>
        <h3>Have a project to share?</h3>
        <p>Showcase your work and help others learn</p>
        <button>Add Your Project →</button>
      </div>
    </div>
  );
};

export default ProjectInsights;