"use client";

import { useState,useEffect } from "react";

import SidebarSection from "./SidebarSection";
import FeedSection from "./FeedSection";
import RightPanelSection from "./RightPanelSection";
import MobileHeaderSection from "./MobileHeaderSection";

import styles from "@/styles/sections/home/layout.module.scss";


const LayoutSection = () => {
  const [collapsed, setCollapsed] = useState(false);

  // MOBILE SIDEBAR
  const [mobileOpen, setMobileOpen] = useState(false);
  

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

      {/* SIDEBAR */}
      <aside className={styles["home-layout__sidebar"]}>
        <SidebarSection
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />
      </aside>

      {/* FEED */}
      <main className={styles["home-layout__feed"]}>
        <FeedSection />
      </main>

      {/* RIGHT PANEL */}
      <aside className={styles["home-layout__rightpanel"]}>
        <RightPanelSection />
      </aside>
    </div>
  );
};

export default LayoutSection;