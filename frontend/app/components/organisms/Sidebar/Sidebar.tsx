import NavItem from "@/components/molecules/NavItem/NavItem";
import { sidebarLinks } from "@/constant/home/sidebarLinks";

import styles from "@/styles/sections/home/sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles["sidebar__top"]}>
        <h2 className={styles["sidebar__logo"]}>ScholarSwap</h2>
      </div>

      <div className={styles["sidebar__menu"]}>
        {sidebarLinks.map((item, index) => (
          <NavItem
            key={index}
            label={item.label}
            icon={item.icon}
            route={item.route} 
          />
        ))}
      </div>

      <div className={styles["sidebar__bottom"]}>
        <p>User Name</p>
        <span>Student</span>
      </div>
    </div>
  );
};

export default Sidebar;