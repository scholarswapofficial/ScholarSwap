"use client";

import React from "react";

import {
  RiSearchLine,
  RiNotification3Line,
  RiMoonClearLine,
  RiMenuLine,
} from "react-icons/ri";

import "@/styles/sections/admin/adminTopbar.scss";

const AdminTopbar = () => {
  return (
    <div className="admin-topbar">
      {/* ------------------------------------------------------------------ */}
      {/*                              LEFT SIDE                             */}
      {/* ------------------------------------------------------------------ */}

      <div className="admin-topbar__left">
        <button className="admin-topbar__menu">
          <RiMenuLine />
        </button>

        <div className="admin-topbar__search">
          <RiSearchLine />

          <input
            type="text"
            placeholder="Search users, posts, courses, products..."
          />
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/*                             RIGHT SIDE                             */}
      {/* ------------------------------------------------------------------ */}

      <div className="admin-topbar__right">
        {/* --------------------------- NOTIFICATION ------------------------ */}

        <button className="admin-topbar__icon-btn">
          <RiNotification3Line />

          <span className="admin-topbar__badge">12</span>
        </button>

        {/* ------------------------------ THEME ---------------------------- */}

        <button className="admin-topbar__icon-btn">
          <RiMoonClearLine />
        </button>

        {/* ------------------------------ ADMIN ---------------------------- */}

        <div className="admin-topbar__profile">
          <div className="admin-topbar__avatar">A</div>

          <div className="admin-topbar__profile-content">
            <h4>Admin User</h4>
            <p>Super Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTopbar;