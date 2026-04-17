"use client";

import "./LibSidebar.scss";
import Logo from "@/components/atoms/Logo/Logo";
import Text from "@/components/atoms/Text/Text";
import NavItem from "@/components/molecules/NavItem/NavItem";
import Icon from "@/components/atoms/Icon/Icon";

const LibSidebar = () => {
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
       <NavItem icon="home" label="Feed" />
       <NavItem icon="library" label="Library" />
       <NavItem icon="messages" label="Messages" />
       <NavItem icon="marketplace" label="Marketplace" active />
      </nav>

      {/* Bottom */}
      <div className="lib-sidebar__bottom">
        <NavItem icon="settings" label="Settings" />
        <NavItem icon="logout" label="Logout" />
      </div>
    </aside>
  );
};

export default LibSidebar;