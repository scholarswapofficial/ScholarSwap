"use client";

import NavItem from "@/components/molecules/NavItem/NavItem";
import { sidebarLinks } from "@/constant/home/sidebarLinks";

import {
  FiChevronLeft,
  FiChevronRight,
  FiX,
} from "react-icons/fi";

import styles from "@/styles/sections/home/sidebar.module.scss";

type SidebarProps = {
  collapsed: boolean;
  setCollapsed: (val: boolean) => void;

  mobileOpen: boolean;
  setMobileOpen: (val: boolean) => void;
};

const Sidebar = ({
  collapsed,
  setCollapsed,
  mobileOpen,
  setMobileOpen,
}: SidebarProps) => {
  return (
    <>
      {/* MOBILE OVERLAY */}
      {mobileOpen && (
        <div
          className={styles["sidebar__overlay"]}
          onClick={() => setMobileOpen(false)}
        />
      )}

      <div
        className={`${styles.sidebar} ${
          collapsed ? styles["sidebar--collapsed"] : ""
        } ${
          mobileOpen ? styles["sidebar--mobile-open"] : ""
        }`}
      >
        {/* BRAND HEADER */}
        <div className={styles["sidebar__brand"]}>
          <div className={styles["brand__icon"]}>S</div>

          {!collapsed && (
            <div className={styles["brand__text"]}>
              <h3>ScholarSwap</h3>
              <span>Learn. Share. Grow.</span>
            </div>
          )}

          {/* DESKTOP TOGGLE */}
          <button
            className={styles["sidebar__toggle"]}
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? <FiChevronRight /> : <FiChevronLeft />}
          </button>

          {/* MOBILE CLOSE */}
          <button
            className={styles["sidebar__mobile-close"]}
            onClick={() => setMobileOpen(false)}
          >
            <FiX />
          </button>
        </div>

        {/* MENU */}
        <div className={styles["sidebar__menu"]}>
          {sidebarLinks.map((item, index) => (
            <NavItem
              key={index}
              label={item.label}
              icon={item.icon}
              route={item.route}
              collapsed={collapsed}
            />
          ))}
        </div>

        {/* BOTTOM */}
        <div className={styles["sidebar__bottom"]}>
          {!collapsed && (
            <>
              <p>User Name</p>
              <span>Student</span>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;