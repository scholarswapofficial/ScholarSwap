"use client";

import React from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";

import {
  RiDashboardFill,
  RiUser3Line,
  RiBookOpenLine,
  RiShoppingBag3Line,
  RiGraduationCapLine,
  RiLineChartLine,
  RiCalendarEventLine,
} from "react-icons/ri";

import "@/styles/sections/admin/adminSidebar.scss";

const AdminSidebar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <aside className="admin-sidebar">
      {/* ---------------------------------------------------------------- */}
      {/*                              LOGO                                */}
      {/* ---------------------------------------------------------------- */}

      <div className="admin-sidebar__logo">
        <div className="admin-sidebar__logo-icon">
          S
        </div>

        <div className="admin-sidebar__logo-content">
          <h2>ScholarSwap</h2>
          <p>Admin Panel</p>
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/*                              MENU                                */}
      {/* ---------------------------------------------------------------- */}

      <nav className="admin-sidebar__nav">
        {/* ------------------------ DASHBOARD ------------------------ */}

        <Link
          href="/admin"
          className={`admin-sidebar__item ${
            isActive("/admin")
              ? "active"
              : ""
          }`}
        >
          <RiDashboardFill />

          <span>Dashboard</span>
        </Link>

        {/* -------------------------- USERS -------------------------- */}

        <Link
          href="/admin/users"
          className={`admin-sidebar__item ${
            isActive("/admin/users")
              ? "active"
              : ""
          }`}
        >
          <RiUser3Line />

          <span>Users</span>
        </Link>

        {/* ------------------------- LIBRARY ------------------------- */}

        <Link
          href="/admin/library"
          className={`admin-sidebar__item ${
            isActive("/admin/library")
              ? "active"
              : ""
          }`}
        >
          <RiBookOpenLine />

          <span>Library</span>
        </Link>

        {/* ---------------------- MARKETPLACE ------------------------ */}

        <Link
          href="/admin/marketplace"
          className={`admin-sidebar__item ${
            isActive("/admin/marketplace")
              ? "active"
              : ""
          }`}
        >
          <RiShoppingBag3Line />

          <span>Marketplace</span>
        </Link>

        {/* ------------------------- COURSES ------------------------- */}

        <Link
          href="/admin/courses"
          className={`admin-sidebar__item ${
            isActive("/admin/courses")
              ? "active"
              : ""
          }`}
        >
          <RiGraduationCapLine />

          <span>Courses</span>
        </Link>

        {/* -------------------------- EVENTS ------------------------- */}

        <Link
          href="/admin/events"
          className={`admin-sidebar__item ${
            isActive("/admin/events")
              ? "active"
              : ""
          }`}
        >
          <RiCalendarEventLine />

          <span>Events</span>
        </Link>

        {/* -------------------------- TRENDS ------------------------- */}

        <Link
          href="/admin/trends"
          className={`admin-sidebar__item ${
            isActive("/admin/trends")
              ? "active"
              : ""
          }`}
        >
          <RiLineChartLine />

          <span>Trends</span>
        </Link>
      </nav>

      {/* ---------------------------------------------------------------- */}
      {/*                             FOOTER                               */}
      {/* ---------------------------------------------------------------- */}

      <div className="admin-sidebar__footer">
        <div className="admin-sidebar__admin">
          <div className="admin-sidebar__avatar">
            A
          </div>

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