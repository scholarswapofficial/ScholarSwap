"use client";

import { useRouter, usePathname } from "next/navigation";
import Icon from "@/components/atoms/Icon/Icon";
import Text from "@/components/atoms/Text/Text";
import styles from "@/styles/sections/home/sidebar.module.scss";

type NavItemProps = {
  label: string;
  icon: string;
  route?: string;
  collapsed?: boolean;
};

const NavItem = ({ label, icon, route, collapsed }: NavItemProps) => {
  const router = useRouter();
  const pathname = usePathname();

  // ✅ AUTO ACTIVE DETECTION
  const isActive = route && pathname === route;

  const handleClick = () => {
    if (route) router.push(route);
  };

  return (
    <div
  onClick={handleClick}
  className={`${styles["nav-item"]} 
    ${isActive ? styles["active"] : ""} 
    ${collapsed ? styles["nav-item--collapsed"] : ""}`}
>
  <div className={styles["nav-inner"]}>   {/* 🔥 NEW */}
    <div className={styles["nav-icon"]}>
      <Icon name={icon} />
    </div>

    <Text
      className={`${styles["nav-text"]} ${
        collapsed ? styles["nav-text--hidden"] : ""
      }`}
    >
      {label}
    </Text>
  </div>

  {collapsed && (
    <span className={styles["nav-tooltip"]}>{label}</span>
  )}
</div>
  );
};

export default NavItem;