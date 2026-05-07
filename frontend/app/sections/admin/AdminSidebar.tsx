"use client";

import React from "react";
import Link from "next/link";

import {
  RiDashboardFill,
  RiUser3Line,
  RiBookOpenLine,
  RiShoppingBag3Line,
  RiGraduationCapLine,
  RiChat3Line,
  RiSettings4Line,
  RiLineChartLine,
} from "react-icons/ri";

import "@/styles/sections/admin/adminSidebar.scss";

const AdminSidebar = () => {
  return (
    <aside className="admin-sidebar">
      {/* ---------------------------------------------------------------- */}
      {/*                              LOGO                                */}
      {/* ---------------------------------------------------------------- */}

      <div className="admin-sidebar__logo">
        <div className="admin-sidebar__logo-icon">S</div>

        <div className="admin-sidebar__logo-content">
          <h2>ScholarSwap</h2>
          <p>Admin Panel</p>
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/*                              MENU                                */}
      {/* ---------------------------------------------------------------- */}

      <nav className="admin-sidebar__nav">
        <Link href="/admin" className="admin-sidebar__item active">
          <RiDashboardFill />
          <span>Dashboard</span>
        </Link>

        <Link href="/admin/users" className="admin-sidebar__item">
          <RiUser3Line />
          <span>Users</span>
        </Link>

        <Link href="/admin/library" className="admin-sidebar__item">
          <RiBookOpenLine />
          <span>Library</span>
        </Link>

        <Link href="/admin/marketplace" className="admin-sidebar__item">
          <RiShoppingBag3Line />
          <span>Marketplace</span>
        </Link>

        <Link href="/admin/courses" className="admin-sidebar__item">
          <RiGraduationCapLine />
          <span>Courses</span>
        </Link>

        <Link href="/admin/engagement" className="admin-sidebar__item">
          <RiChat3Line />
          <span>Engagement</span>
        </Link>

        <Link href="/admin/trends" className="admin-sidebar__item">
          <RiLineChartLine />
          <span>Trends</span>
        </Link>

        <Link href="/admin/platform-controls" className="admin-sidebar__item">
          <RiSettings4Line />
          <span>Platform Controls</span>
        </Link>
      </nav>

      {/* ---------------------------------------------------------------- */}
      {/*                             FOOTER                               */}
      {/* ---------------------------------------------------------------- */}

      <div className="admin-sidebar__footer">
        <div className="admin-sidebar__admin">
          <div className="admin-sidebar__avatar">A</div>

          <div className="admin-sidebar__admin-content">
            <h4>Admin User</h4>
            <p>Super Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;