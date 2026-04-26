"use client";

import { FiSearch, FiBell, FiUser } from "react-icons/fi";
import "@/styles/sections/profile/profile.scss";

const ProfileBar = () => {
  return (
    <div className="profile-bar">
      {/* LEFT */}
      <div className="profile-bar-left">
        <span className="profile-bar-title">Welcome</span>
      </div>

      {/* CENTER */}
      <div className="profile-bar-center">
        <div className="profile-search">
          <FiSearch />
          <input type="text" placeholder="Search anything..." />
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