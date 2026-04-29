"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Icons from "react-icons/fa";
import styles from "@/styles/sections/feed/friend.module.scss";

type SidebarItemType = {
  id: number;
  label: string;
  icon: keyof typeof Icons;
  sub?: string;
  path: string; // ✅ added
};

type Props = {
  item: SidebarItemType;
};

const FriendSidebarItem: React.FC<Props> = ({ item }) => {
  const pathname = usePathname();
  const Icon = Icons[item.icon];

  // ✅ supports nested routes like /friend/projects/123
  const isActive = pathname.startsWith(item.path);

  return (
    <Link href={item.path} className={styles["link-wrapper"]}>
      <div
        className={`${styles["sidebar-item"]} ${
          isActive ? styles["active"] : ""
        }`}
      >
        {/* ICON BOX */}
        <div className={styles["icon-box"]}>
          <Icon />
        </div>

        {/* TEXT */}
        <div className={styles["text"]}>
          <span className={styles["label"]}>{item.label}</span>
          {item.sub && <small className={styles["sub"]}>{item.sub}</small>}
        </div>
      </div>
    </Link>
  );
};

export default FriendSidebarItem;