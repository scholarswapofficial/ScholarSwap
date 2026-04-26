"use client";

import Sidebar from "@/components/organisms/LibSidebar/LibSidebar";
import ProfileHeader from "@/sections/profile/ProfileHeader";
import ProfileOverview from "@/sections/profile/ProfileOverview";
import ProfilePosts from "@/sections/profile/ProfilePosts";
import ProfileSaved from "@/sections/profile/ProfileSaved";
import ProfileActivity from "@/sections/profile/ProfileActivity";
import ProfileBar from "@/sections/profile/ProfileBar";

import "@/styles/sections/profile/profile.scss";
import { useState } from "react";

const ProfilePage = () => {
  const [tab, setTab] = useState("overview");

  return (
    <div className="profile-page">
      <Sidebar />

      {/* ✅ NEW WRAPPER */}
      <div className="profile-container">
        {/* ✅ TOP BAR (NOW STICKS TO SCREEN) */}
        <ProfileBar />

        {/* ✅ MAIN CONTENT */}
        <div className="profile-main">
          <ProfileHeader />

          {/* Tabs */}
          <div className="profile-tabs">
            {["overview", "posts", "saved", "activity"].map((t) => (
              <button
                key={t}
                className={tab === t ? "active" : ""}
                onClick={() => setTab(t)}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="profile-content">
            {tab === "overview" && <ProfileOverview />}
            {tab === "posts" && <ProfilePosts />}
            {tab === "saved" && <ProfileSaved />}
            {tab === "activity" && <ProfileActivity />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;