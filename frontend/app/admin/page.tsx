"use client";

import React from "react";

/* -------------------------------------------------------------------------- */
/*                                 SECTIONS                                   */
/* -------------------------------------------------------------------------- */

import AdminSidebar from "../sections/admin/AdminSidebar";
import AdminTopbar from "../sections/admin/AdminTopbar";
import AdminKpi from "../sections/admin/AdminKpi";
import AdminHighlight from "../sections/admin/AdminHighlight";

// import AdminFooter from "../sections/admin/AdminFooter";

/* -------------------------------------------------------------------------- */
/*                                   STYLES                                   */
/* -------------------------------------------------------------------------- */

import "../styles/sections/admin/admin-page.scss";

const AdminPage = () => {
  return (
    <div className="admin-page">
      {/* ------------------------------------------------------------------ */}
      {/*                              SIDEBAR                               */}
      {/* ------------------------------------------------------------------ */}

      <aside className="admin-page__sidebar">
        <AdminSidebar />
      </aside>

      {/* ------------------------------------------------------------------ */}
      {/*                             MAIN AREA                              */}
      {/* ------------------------------------------------------------------ */}

      <main className="admin-page__main">
        {/* -------------------------------------------------------------- */}
        {/*                            TOPBAR                             */}
        {/* -------------------------------------------------------------- */}

        <header className="admin-page__topbar">
          <AdminTopbar />
        </header>

        {/* -------------------------------------------------------------- */}
        {/*                           CONTENT                              */}
        {/* -------------------------------------------------------------- */}

        <section className="admin-page__content">
          {/* ---------------------------------------------------------- */}
          {/*                             KPI                            */}
          {/* ---------------------------------------------------------- */}

          <div className="admin-page__kpi">
            <AdminKpi />
          </div>

          {/* ---------------------------------------------------------- */}
          {/*                         HIGHLIGHTS                         */}
          {/* ---------------------------------------------------------- */}

          <div className="admin-page__graph">
            <AdminHighlight />
          </div>
        </section>

        {/* -------------------------------------------------------------- */}
        {/*                            FOOTER                             */}
        {/* -------------------------------------------------------------- */}

        <footer className="admin-page__footer">
          {/* <AdminFooter /> */}
        </footer>
      </main>
    </div>
  );
};

export default AdminPage;