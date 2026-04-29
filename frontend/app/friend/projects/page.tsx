"use client";

import styles from "@/styles/sections/friend/projects.module.scss";
import { PROJECTS } from "@/constant/friend/projects";

import FriendSidebar from "@/components/organisms/FriendSidebar/FriendSidebar";
import FeedTabs from "@/components/molecules/FeedTabs/FeedTabs";
import ProjectInsights from "@/components/organisms/ProjectInsights/ProjectInsights";

import { FaStar, FaCodeBranch } from "react-icons/fa";

export default function ProjectsPage() {
  return (
    <div className={styles["layout"]}>
      
      {/* LEFT */}
      <div className={styles["left"]}>
        <FriendSidebar />
      </div>

      {/* CENTER */}
      <div className={styles["center"]}>
        <FeedTabs />

        {/* HEADER */}
        <div className={styles["header"]}>
          <div>
            <h2>Projects Hub</h2>
            <p>Explore projects across Web, AI, Mobile and more</p>
          </div>

          <button className={styles["add-btn"]}>
            + Add Project
          </button>
        </div>

        {/* FILTERS */}
        <div className={styles["filters"]}>
          <input placeholder="Search projects..." />
          <select>
            <option>All Levels</option>
          </select>
          <select>
            <option>All Categories</option>
          </select>
          <select>
            <option>Tech Stack</option>
          </select>
        </div>

        {/* CATEGORY PILLS */}
        <div className={styles["categories"]}>
          <span className={styles["active"]}>All</span>
          <span>Web</span>
          <span>AI</span>
          <span>Mobile</span>
          <span>Backend</span>
        </div>

        {/* GRID */}
        <div className={styles["grid"]}>
          {PROJECTS.map((p) => (
            <div key={p.id} className={styles["card"]}>
              
              {/* IMAGE */}
              <div className={styles["image"]}>
                <img src={p.image} alt={p.title} />
              </div>

              {/* CONTENT */}
              <div className={styles["content"]}>
                <h3>{p.title}</h3>

                <div className={styles["tags"]}>
                  {p.tech.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>

                <div className={styles["meta"]}>
                  <span><FaStar /> {p.stars}</span>
                  <span><FaCodeBranch /> {p.forks}</span>
                </div>

                <p className={styles["author"]}>
                  {p.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

     <div className={styles["right"]}>
  <ProjectInsights />
</div>
    </div>
  );
}