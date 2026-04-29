"use client";

import styles from "@/styles/sections/home/feed.module.scss";
import {
  FaHome,
  FaUsers,
  FaBookOpen,
  FaCommentDots,
  FaBell,
} from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { useRouter, usePathname } from "next/navigation";

const FeedTabs = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className={styles["feed-wrapper"]}>
      <div className={styles["feed-navbar"]}>

        <div
          className={`${styles["feed-navbar__item"]} ${
            isActive("/home") ? styles["active"] : ""
          }`}
          onClick={() => router.push("/home")}
        >
          <FaHome />
          <span>Home</span>
        </div>

        <div
          className={`${styles["feed-navbar__item"]} ${
            isActive("/friend") ? styles["active"] : ""
          }`}
          onClick={() => router.push("/friend")}
        >
          <FaUsers />
          <span>My Network</span>
        </div>

        <div
          className={`${styles["feed-navbar__item"]} ${
            isActive("/course") ? styles["active"] : ""
          }`}
          onClick={() => router.push("/course")}
        >
          <FaBookOpen />
          <span>Courses</span>
        </div>

        <div
          className={`${styles["feed-navbar__item"]} ${
            isActive("/messages") ? styles["active"] : ""
          }`}
          onClick={() => router.push("/messages")}
        >
          <FaCommentDots />
          <span>Messaging</span>
        </div>

        <div
          className={`${styles["feed-navbar__item"]} ${
            isActive("/notification") ? styles["active"] : ""
          }`}
          onClick={() => router.push("/notification")}
        >
          <FaBell />
          <span>Notifications</span>
        </div>

        <div
          className={styles["feed-navbar__item"]}
          onClick={() => router.push("/profile")}
        >
          <img
            src="/images/library/default-avatar.png"
            alt="profile"
            className={styles["feed-navbar__avatar"]}
          />
          <span>
            Me <IoMdArrowDropdown />
          </span>
        </div>

      </div>
    </div>
  );
};

export default FeedTabs;