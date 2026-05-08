"use client";

import React from "react";

import AdminSidebar from "@/sections/admin/AdminSidebar";
import AdminTopbar from "@/sections/admin/AdminTopbar";
import AdminUserKpi from "@/sections/admin/AdminUserKpi";
import AdminUserStats from "@/sections/admin/AdminUserStats";

import "@/styles/sections/admin/admin-users-page.scss";

const AdminUsersPage = () => {
  return (
    <div className="admin-users-page">
      {/* ------------------------------------------------------------------ */}
      {/*                              SIDEBAR                               */}
      {/* ------------------------------------------------------------------ */}

      <aside className="admin-users-page__sidebar">
        <AdminSidebar />
      </aside>

      {/* ------------------------------------------------------------------ */}
      {/*                             MAIN AREA                              */}
      {/* ------------------------------------------------------------------ */}

      <main className="admin-users-page__main">
        {/* -------------------------------------------------------------- */}
        {/*                            TOPBAR                             */}
        {/* -------------------------------------------------------------- */}

        <header className="admin-users-page__topbar">
          <AdminTopbar />
        </header>

        {/* -------------------------------------------------------------- */}
        {/*                           CONTENT                              */}
        {/* -------------------------------------------------------------- */}

        <section className="admin-users-page__content">
          {/* ---------------------------------------------------------- */}
          {/*                          HEADER                            */}
          {/* ---------------------------------------------------------- */}

          <div className="admin-users-page__header">
            <h1>Users</h1>

            <p>
              Manage platform users, verification and account activity.
            </p>
          </div>

          {/* ---------------------------------------------------------- */}
          {/*                            KPI                             */}
          {/* ---------------------------------------------------------- */}

          <div className="admin-users-page__kpi">
            <AdminUserKpi />
          </div>

          <div className="admin-users-page__kpi">
            <AdminUserStats />
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminUsersPage;