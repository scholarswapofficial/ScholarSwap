"use client";

import { useState } from "react";

import Sidebar from "@/components/organisms/LibSidebar/LibSidebar";

import ProfileHeader from "@/sections/profile/ProfileHeader";
import ProfileOverview from "@/sections/profile/ProfileOverview";
import ProfilePosts from "@/sections/profile/ProfilePosts";
import ProfileSaved from "@/sections/profile/ProfileSaved";
import ProfileActivity from "@/sections/profile/ProfileActivity";
import ProfileBar from "@/sections/profile/ProfileBar";

import "@/styles/sections/profile/profile.scss";

const ProfilePage = () => {
  const [tab, setTab] =
    useState("overview");

  const [collapsed, setCollapsed] =
    useState(false);

  // MOBILE SIDEBAR
  const [mobileOpen, setMobileOpen] =
    useState(false);

  return (
    <div className="profile-page">
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* WRAPPER */}
      <div className="profile-container">
        {/* TOP BAR */}
        <ProfileBar
          setMobileOpen={setMobileOpen}
        />

        {/* MAIN */}
        <div className="profile-main">
          <ProfileHeader />

          {/* TABS */}
          <div className="profile-tabs">
            {[
              "overview",
              "posts",
              "saved",
              "activity",
            ].map((t) => (
              <button
                key={t}
                className={
                  tab === t
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setTab(t)
                }
              >
                {t}
              </button>
            ))}
          </div>

          {/* CONTENT */}
          <div className="profile-content">
            {tab ===
              "overview" && (
              <ProfileOverview />
            )}

            {tab === "posts" && (
              <ProfilePosts />
            )}

            {tab === "saved" && (
              <ProfileSaved />
            )}

            {tab ===
              "activity" && (
              <ProfileActivity />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;