"use client";

import React from "react";

/* -------------------------------------------------------------------------- */
/*                                 SECTIONS                                   */
/* -------------------------------------------------------------------------- */

import AdminSidebar from "@/sections/admin/AdminSidebar";
import AdminTopbar from "@/sections/admin/AdminTopbar";

import AdminMarketHeader from "@/sections/admin/AdminMarketHeader";
import AdminMarketTransaction from "@/sections/admin/AdminMarketTransaction";

/* -------------------------------------------------------------------------- */
/*                                   STYLES                                   */
/* -------------------------------------------------------------------------- */

import "@/styles/sections/admin/admin-marketplace-page.scss";

const AdminMarketplacePage = () => {
  return (
    <div className="admin-marketplace-page">
      {/* ------------------------------------------------------------------ */}
      {/*                              SIDEBAR                               */}
      {/* ------------------------------------------------------------------ */}

      <aside className="admin-marketplace-page__sidebar">
        <AdminSidebar />
      </aside>

      {/* ------------------------------------------------------------------ */}
      {/*                             MAIN AREA                              */}
      {/* ------------------------------------------------------------------ */}

      <main className="admin-marketplace-page__main">
        {/* -------------------------------------------------------------- */}
        {/*                            TOPBAR                             */}
        {/* -------------------------------------------------------------- */}

        <header className="admin-marketplace-page__topbar">
          <AdminTopbar />
        </header>

        {/* -------------------------------------------------------------- */}
        {/*                           CONTENT                              */}
        {/* -------------------------------------------------------------- */}

        <section className="admin-marketplace-page__content">
          {/* ---------------------------------------------------------- */}
          {/*                       HEADER SECTION                       */}
          {/* ---------------------------------------------------------- */}

          <div className="admin-marketplace-page__header">
            <AdminMarketHeader />
          </div>

          {/* ---------------------------------------------------------- */}
          {/*                    TRANSACTION SECTION                     */}
          {/* ---------------------------------------------------------- */}

          <div className="admin-marketplace-page__transactions">
             <AdminMarketTransaction />
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminMarketplacePage;