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

     <nav className="lib-sidebar__nav">
  <NavItem icon="home" label="Feed" route="/home" />
  <NavItem icon="library" label="Library" route="/library" />
  <NavItem icon="messages" label="Messages" route="/messages" />
  <NavItem icon="marketplace" label="Marketplace" route="/library" active />
</nav>

<div className="lib-sidebar__bottom">
  <NavItem icon="settings" label="Settings" route="/settings" />
  <NavItem icon="logout" label="Logout" route="/auth" />
</div>
    </aside>
  );
};

export default LibSidebar;