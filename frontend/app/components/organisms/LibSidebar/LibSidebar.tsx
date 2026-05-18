"use client";

import { usePathname } from "next/navigation";

import {
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import "./LibSidebar.scss";

import Logo from "@/components/atoms/Logo/Logo";
import Text from "@/components/atoms/Text/Text";
import NavItem from "@/components/molecules/NavItem/NavItem";

type LibSidebarProps = {
  collapsed: boolean;

  setCollapsed: (
    value: boolean
  ) => void;
};

const LibSidebar = ({
  collapsed,
  setCollapsed,
}: LibSidebarProps) => {
  const pathname = usePathname();

  return (
    <aside
      className={`lib-sidebar ${
        collapsed
          ? "collapsed"
          : ""
      }`}
    >
      {/* 🔥 BRAND / TOP */}
      <div className="lib-sidebar__brand">
        {!collapsed && (
          <Logo text="ScholarSwap" />
        )}

        <button
          className="lib-sidebar__toggle"
          onClick={() =>
            setCollapsed(!collapsed)
          }
        >
          {collapsed ? (
            <FiChevronRight />
          ) : (
            <FiChevronLeft />
          )}
        </button>
      </div>

      {/* 👤 PROFILE */}
      <div className="lib-sidebar__profile">
        <img
          src="/images/library/default-avatar.png"
          alt="user"
          className="lib-sidebar__avatar"
        />

        {!collapsed && (
          <div>
            <Text variant="h4">
              John Doe
            </Text>

            <Text variant="p">
              Student
            </Text>
          </div>
        )}
      </div>

      {/* 📌 NAV */}
      <nav className="lib-sidebar__nav">
        <NavItem
          icon="home"
          label="Feed"
          route="/home"
          collapsed={collapsed}
        />

        <NavItem
          icon="library"
          label="Library"
          route="/library"
          collapsed={collapsed}
        />

        <NavItem
          icon="messages"
          label="Messages"
          route="/messages"
          collapsed={collapsed}
        />

        <NavItem
          icon="marketplace"
          label="Marketplace"
          route="/marketplace"
          collapsed={collapsed}
        />
      </nav>

      {/* 🔻 BOTTOM */}
      <div className="lib-sidebar__bottom">
        <NavItem
          icon="settings"
          label="Settings"
          route="/settings"
          collapsed={collapsed}
        />

        <NavItem
          icon="logout"
          label="Logout"
          route="/auth"
          collapsed={collapsed}
        />
      </div>
    </aside>
  );
};

export default LibSidebar;