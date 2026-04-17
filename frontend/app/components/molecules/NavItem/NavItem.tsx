"use client";

import { useRouter } from "next/navigation";
import Icon from "@/components/atoms/Icon/Icon";
import Text from "@/components/atoms/Text/Text";
import styles from "@/styles/sections/home/sidebar.module.scss";

type NavItemProps = {
  label: string;
  icon: string;
  active?: boolean;
  route?: string; 
};

const NavItem = ({ label, icon, active, route }: NavItemProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (route) router.push(route);
  };

  return (
    <div
      onClick={handleClick}
      className={`${styles["nav-item"]} ${
        active ? styles["active"] : ""
      }`}
    >
      <Icon name={icon} />
      <Text className={styles["nav-text"]}>{label}</Text>
    </div>
  );
};

export default NavItem;