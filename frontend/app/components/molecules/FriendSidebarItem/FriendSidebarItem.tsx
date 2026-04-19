import * as Icons from "react-icons/fa";
import styles from "@/styles/sections/feed/friend.module.scss";

type SidebarItemType = {
  id: number;
  label: string;
  icon: keyof typeof Icons;
  sub?: string;
};

type Props = {
  item: SidebarItemType;
  active?: boolean;
};

const FriendSidebarItem: React.FC<Props> = ({ item, active }) => {
  const Icon = Icons[item.icon];

  return (
    <div
      className={`${styles["sidebar-item"]} ${
        active ? styles["active"] : ""
      }`}
    >
      <Icon />
      <span>
        {item.label}
        {item.sub && <small>{item.sub}</small>}
      </span>
    </div>
  );
};

export default FriendSidebarItem;