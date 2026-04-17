"use client";

import { usePathname } from "next/navigation";

import "./LibSidebar.scss";
import Logo from "@/components/atoms/Logo/Logo";
import Text from "@/components/atoms/Text/Text";
import NavItem from "@/components/molecules/NavItem/NavItem";

const LibSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="lib-sidebar">
      {/* Top Logo */}
      <div className="lib-sidebar__top">
        <Logo text="ScholarSwap" />
      </div>

      {/* User Profile */}
      <div className="lib-sidebar__profile">
        <img
          src="/images/library/default-avatar.png"
          alt="user"
          className="lib-sidebar__avatar"
        />
        <div>
          <Text variant="h4">John Doe</Text>
          <Text variant="p">Student</Text>
        </div>
      </div>

      {/* Navigation */}
      <nav className="lib-sidebar__nav">
        <NavItem
          icon="home"
          label="Feed"
          route="/home"
          active={pathname === "/home"}
        />

        <NavItem
          icon="library"
          label="Library"
          route="/library"
          active={pathname === "/library"}
        />

        <NavItem
          icon="messages"
          label="Messages"
          route="/messages"
          active={pathname === "/messages"}
        />

        <NavItem
          icon="marketplace"
          label="Marketplace"
          route="/marketplace"
          active={pathname === "/marketplace"}
        />
      </nav>

      {/* Bottom */}
      <div className="lib-sidebar__bottom">
        <NavItem
          icon="settings"
          label="Settings"
          route="/settings"
          active={pathname === "/settings"}
        />

        <NavItem
          icon="logout"
          label="Logout"
          route="/auth"
        />
      </div>
    </aside>
  );
};

export default LibSidebar;