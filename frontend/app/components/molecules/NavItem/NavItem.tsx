import Icon from "@/components/atoms/Icon/Icon";
import Text from "@/components/atoms/Text/Text";

import styles from "@/styles/sections/home/sidebar.module.scss";

type NavItemProps = {
  label: string;
  icon: string;
  active?: boolean;
};
const NavItem = ({ label, icon, active }: NavItemProps) => {
  return (
    <div
      className={`${styles["nav-item"]} ${
        active ? styles["active"] : ""
      }`}
    >
      <Icon name={icon} />
      <Text>{label}</Text>
    </div>
  );
};

export default NavItem;