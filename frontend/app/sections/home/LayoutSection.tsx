"use client";

import { useState } from "react";

import SidebarSection from "./SidebarSection";
import FeedSection from "./FeedSection";
import RightPanelSection from "./RightPanelSection";

import styles from "@/styles/sections/home/layout.module.scss";

const LayoutSection = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`${styles["home-layout"]} ${
        collapsed ? styles["collapsed"] : ""
      }`}
    >
      <aside className={styles["home-layout__sidebar"]}>
        <SidebarSection
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />
      </aside>

      <main className={styles["home-layout__feed"]}>
        <FeedSection />
      </main>

      <aside className={styles["home-layout__rightpanel"]}>
        <RightPanelSection />
      </aside>
    </div>
  );
};

export default LayoutSection;