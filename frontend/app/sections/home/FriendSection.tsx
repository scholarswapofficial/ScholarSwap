"use client";

import { useState } from "react";

import FeedTabs from "@/components/molecules/FeedTabs/FeedTabs";
import FriendSidebar from "@/components/organisms/FriendSidebar/FriendSidebar";
import FriendRequests from "@/components/organisms/FriendRequests/FriendRequests";
import MobileHeaderSection from "@/sections/home/MobileHeaderSection";

import styles from "@/styles/sections/feed/friend.module.scss";

const FriendSection = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`${styles["home-layout"]} ${
        collapsed ? styles["collapsed"] : ""
      }`}
    >
      {/* MOBILE HEADER */}
      <MobileHeaderSection
        setMobileOpen={setMobileOpen}
      />

      <div className={styles["friend-layout"]}>
        
        {/* Top Navigation */}
        <FeedTabs />

        <div className={styles["friend-content"]}>
          
          {/* Left Sidebar */}
          <FriendSidebar />

          {/* Right Content */}
          <FriendRequests />

        </div>
      </div>
    </div>
  );
};

export default FriendSection;