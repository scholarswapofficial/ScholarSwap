"use client";

import React, { useState } from "react";

/* -------------------------------------------------------------------------- */
/*                                 SECTIONS                                   */
/* -------------------------------------------------------------------------- */

import AdminSidebar from "@/sections/admin/AdminSidebar";
import AdminTopbar from "@/sections/admin/AdminTopbar";

import AdminLibTable from "@/sections/admin/AdminLibTable";
import AdminLibStats from "@/sections/admin/AdminLibStats";

/* -------------------------------------------------------------------------- */
/*                                   STYLES                                   */
/* -------------------------------------------------------------------------- */

import "@/styles/sections/admin/admin-library-page.scss";

const AdminLibraryPage = () => {
  const [activeTab, setActiveTab] = useState("books");

  return (
    <div className="admin-library-page">
      {/* ------------------------------------------------------------------ */}
      {/*                              SIDEBAR                               */}
      {/* ------------------------------------------------------------------ */}

      <aside className="admin-library-page__sidebar">
        <AdminSidebar />
      </aside>

      {/* ------------------------------------------------------------------ */}
      {/*                             MAIN AREA                              */}
      {/* ------------------------------------------------------------------ */}

      <main className="admin-library-page__main">
        {/* -------------------------------------------------------------- */}
        {/*                            TOPBAR                             */}
        {/* -------------------------------------------------------------- */}

        <header className="admin-library-page__topbar">
          <AdminTopbar />
        </header>

        {/* -------------------------------------------------------------- */}
        {/*                           CONTENT                              */}
        {/* -------------------------------------------------------------- */}

        <section className="admin-library-page__content">
          {/* ---------------------------------------------------------- */}
          {/*                            TABS                            */}
          {/* ---------------------------------------------------------- */}

          <div className="admin-library-page__tabs">
            <button
              className={
                activeTab === "books" ? "active" : ""
              }
              onClick={() => setActiveTab("books")}
            >
              Books
            </button>

            <button
              className={
                activeTab === "stats" ? "active" : ""
              }
              onClick={() => setActiveTab("stats")}
            >
              Stats
            </button>
          </div>

          {/* ---------------------------------------------------------- */}
          {/*                         TAB CONTENT                        */}
          {/* ---------------------------------------------------------- */}

          {activeTab === "books" && (
            <div className="admin-library-page__table">
              <AdminLibTable />
            </div>
          )}

          {activeTab === "stats" && (
            <div className="admin-library-page__stats">
              <AdminLibStats />
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default AdminLibraryPage;