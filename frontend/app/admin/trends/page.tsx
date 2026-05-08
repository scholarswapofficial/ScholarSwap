"use client";

import React from "react";

/* -------------------------------------------------------------------------- */
/*                                 SECTIONS                                   */
/* -------------------------------------------------------------------------- */

import AdminSidebar from "@/sections/admin/AdminSidebar";
import AdminTopbar from "@/sections/admin/AdminTopbar";

import AdminTrendKpi from "@/sections/admin/AdminTrendKpi";
import AdminTrendGraph from "@/sections/admin/AdminTrendGraph";

/* -------------------------------------------------------------------------- */
/*                                   STYLES                                   */
/* -------------------------------------------------------------------------- */

import "@/styles/sections/admin/admin-trends-page.scss";

const AdminTrendsPage = () => {
  return (
    <div className="admin-trends-page">
      {/* ------------------------------------------------------------------ */}
      {/*                              SIDEBAR                               */}
      {/* ------------------------------------------------------------------ */}

      <aside className="admin-trends-page__sidebar">
        <AdminSidebar />
      </aside>

      {/* ------------------------------------------------------------------ */}
      {/*                             MAIN AREA                              */}
      {/* ------------------------------------------------------------------ */}

      <main className="admin-trends-page__main">
        {/* -------------------------------------------------------------- */}
        {/*                            TOPBAR                             */}
        {/* -------------------------------------------------------------- */}

        <header className="admin-trends-page__topbar">
          <AdminTopbar />
        </header>

        {/* -------------------------------------------------------------- */}
        {/*                           CONTENT                              */}
        {/* -------------------------------------------------------------- */}

        <section className="admin-trends-page__content">
          {/* ---------------------------------------------------------- */}
          {/*                            KPI                             */}
          {/* ---------------------------------------------------------- */}

          <div className="admin-trends-page__kpi">
            <AdminTrendKpi />
          </div>

          {/* ---------------------------------------------------------- */}
          {/*                           GRAPH                            */}
          {/* ---------------------------------------------------------- */}

          <div className="admin-trends-page__graph">
            <AdminTrendGraph />
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminTrendsPage;