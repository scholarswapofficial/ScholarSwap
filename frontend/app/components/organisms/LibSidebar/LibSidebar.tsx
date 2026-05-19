"use client";

import { usePathname } from "next/navigation";

import {  FiChevronLeft,  FiChevronRight,  FiX,} from "react-icons/fi";
import "./LibSidebar.scss";

import Logo from "@/components/atoms/Logo/Logo";
import Text from "@/components/atoms/Text/Text";
import NavItem from "@/components/molecules/NavItem/NavItem";

type LibSidebarProps = {
  collapsed: boolean;

  setCollapsed: (
    value: boolean
  ) => void;

  mobileOpen: boolean;

  setMobileOpen: (
    value: boolean
  ) => void;
};

const LibSidebar = ({
  collapsed,
  setCollapsed,
  mobileOpen,
  setMobileOpen,
}: LibSidebarProps) => {
  const pathname = usePathname();

  return (
    <>
      {/* MOBILE OVERLAY */}
      {mobileOpen && (
        <div
          className="lib-sidebar__overlay"
          onClick={() =>
            setMobileOpen(false)
          }
        />
      )}

      <aside
        className={`lib-sidebar ${
          collapsed
            ? "collapsed"
            : ""
        } ${
          mobileOpen
            ? "mobile-open"
            : ""
        }`}
      >
        {/* BRAND / TOP */}
        <div className="lib-sidebar__brand">
          {!collapsed && (
            <Logo />
          )}

          {/* DESKTOP TOGGLE */}
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

          {/* MOBILE CLOSE */}
          <button
            className="lib-sidebar__mobile-close"
            onClick={() =>
              setMobileOpen(false)
            }
          >
            <FiX />
          </button>
        </div>

        {/* PROFILE */}
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

        {/* NAV */}
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

        {/* BOTTOM */}
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
    </>
  );
};

export default LibSidebar;