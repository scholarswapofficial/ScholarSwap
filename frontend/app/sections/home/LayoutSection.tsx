import SidebarSection from "./SidebarSection";
import FeedSection from "./FeedSection";
import RightPanelSection from "./RightPanelSection";

import styles from "@/styles/sections/home/layout.module.scss";

const LayoutSection = () => {
  return (
    <div className={styles["home-layout"]}>
      <aside className={styles["home-layout__sidebar"]}>
        <SidebarSection />
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