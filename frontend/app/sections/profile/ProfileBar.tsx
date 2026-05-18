"use client";

import {
  FiSearch,
  FiBell,
  FiUser,
  FiMenu,
} from "react-icons/fi";

import "@/styles/sections/profile/profile.scss";

type ProfileBarProps = {
  setMobileOpen: (
    value: boolean
  ) => void;
};

const ProfileBar = ({
  setMobileOpen,
}: ProfileBarProps) => {
  return (
    <div className="profile-bar">
      {/* LEFT */}
      <div className="profile-bar-left">
        {/* MOBILE HAMBURGER */}
        <button
          className="profile-bar-menu"
          onClick={() =>
            setMobileOpen(true)
          }
        >
          <FiMenu />
        </button>

        <span className="profile-bar-title">
          Welcome
        </span>
      </div>

      {/* CENTER */}
      <div className="profile-bar-center">
        <div className="profile-search">
          <FiSearch />

          <input
            type="text"
            placeholder="Search anything..."
          />
        </div>
      </div>

      {/* RIGHT */}
      <div className="profile-bar-right">
        <button className="profile-bar-icon">
          <FiBell />
        </button>

        <button className="profile-bar-avatar">
          <FiUser />
        </button>
      </div>
    </div>
  );
};

export default ProfileBar;