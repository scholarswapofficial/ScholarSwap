"use client";

import "@/styles/sections/profile/profile.scss";
import { FiMapPin, FiCalendar, FiLink } from "react-icons/fi";

const ProfileHeader = () => {
  return (
    <div className="profile-header">
      {/* COVER */}
      <div className="profile-cover">
        <div className="profile-avatar" />
      </div>

      {/* BODY */}
      <div className="profile-header-body">
        <div className="profile-user">
          <h2 className="profile-name">Your Name</h2>
          <p className="profile-username">@username</p>

          <div className="profile-meta">
            <div className="profile-meta-item">
              <FiMapPin />
              <span>City, Country</span>
            </div>

            <div className="profile-meta-item">
              <FiCalendar />
              <span>Joined May 2024</span>
            </div>

            <div className="profile-meta-item link">
              <FiLink />
              <span>yourwebsite.com</span>
            </div>
          </div>
        </div>

        <button className="profile-edit-btn">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;