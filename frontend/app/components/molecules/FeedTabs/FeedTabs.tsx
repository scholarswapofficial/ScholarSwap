"use client";

import styles from "@/styles/sections/home/feed.module.scss";
import {  FaHome, FaUsers,  FaBookOpen, FaCommentDots,  FaBell,} from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { useRouter } from "next/navigation";

const FeedTabs = () => {  const router = useRouter();
  return (
    <div className={styles["feed-wrapper"]}>
      <div className={styles["feed-navbar"]}>
        
        <div className={styles["feed-navbar__item"]}  onClick={() => router.push("/home")}>
          <FaHome />
          <span>Home</span>
        </div>

        <div   className={styles["feed-navbar__item"]}   onClick={() => router.push("/friend")}>
          <FaUsers />
          <span>My Network</span>
        </div>

        <div  className={styles["feed-navbar__item"]}   onClick={() => router.push("/course")}>
          <FaBookOpen />
          <span>Courses</span>
        </div>

        <div  className={styles["feed-navbar__item"]}   onClick={() => router.push("/messages")}>
          <FaCommentDots />
          <span>Messaging</span>
        </div>

        <div className={styles["feed-navbar__item"]}  onClick={() => router.push("/notification")}>
          <FaBell />
          <span>Notifications</span>
        </div>

        <div   className={styles["feed-navbar__item"]}  onClick={() => router.push("/profile")}>
          <img  src="/images/library/default-avatar.png"  alt="profile"  className={styles["feed-navbar__avatar"]}/>
          <span>
            Me <IoMdArrowDropdown />
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeedTabs;