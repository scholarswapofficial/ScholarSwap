"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Icon from "@/components/atoms/Icon/Icon";

import styles from "@/styles/sections/feed/friend.module.scss";

type SidebarItemType = {
  id: number;
  label: string;
  icon: string;
  sub?: string;
  path: string;
};

type Props = {
  item: SidebarItemType;
};

const FriendSidebarItem = ({
  item,
}: Props) => {
  const pathname = usePathname();

  // ✅ supports nested routes
  const isActive =
    pathname.startsWith(item.path);

  return (
    <Link
      href={item.path}
      className={
        styles["link-wrapper"]
      }
    >
      <div
        className={`${
          styles["sidebar-item"]
        } ${
          isActive
            ? styles["active"]
            : ""
        }`}
      >
        {/* ICON BOX */}
        <div
          className={
            styles["icon-box"]
          }
        >
          <Icon name={item.icon} />
        </div>

        {/* TEXT */}
        <div
          className={styles["text"]}
        >
          <span
            className={
              styles["label"]
            }
          >
            {item.label}
          </span>

          {item.sub && (
            <small
              className={
                styles["sub"]
              }
            >
              {item.sub}
            </small>
          )}
        </div>
      </div>
    </Link>
  );
};

export default FriendSidebarItem;