"use client";

import React, { useState } from "react";

/* -------------------------------------------------------------------------- */
/*                                 SECTIONS                                   */
/* -------------------------------------------------------------------------- */

import AdminSidebar from "@/sections/admin/AdminSidebar";
import AdminTopbar from "@/sections/admin/AdminTopbar";

import AdminEventTable from "@/sections/admin/AdminEventTable";
import EventModal from "@/sections/admin/EventModal";

/* -------------------------------------------------------------------------- */
/*                                   STYLES                                   */
/* -------------------------------------------------------------------------- */

import "@/styles/sections/admin/admin-events-page.scss";

const AdminEventsPage = () => {
  const [showModal, setShowModal] =
    useState(false);

  return (
    <div className="admin-events-page">
      {/* ------------------------------------------------------------------ */}
      {/*                              SIDEBAR                               */}
      {/* ------------------------------------------------------------------ */}

      <aside className="admin-events-page__sidebar">
        <AdminSidebar />
      </aside>

      {/* ------------------------------------------------------------------ */}
      {/*                             MAIN AREA                              */}
      {/* ------------------------------------------------------------------ */}

      <main className="admin-events-page__main">
        {/* -------------------------------------------------------------- */}
        {/*                            TOPBAR                             */}
        {/* -------------------------------------------------------------- */}

        <header className="admin-events-page__topbar">
          <AdminTopbar />
        </header>

        {/* -------------------------------------------------------------- */}
        {/*                           CONTENT                              */}
        {/* -------------------------------------------------------------- */}

        <section className="admin-events-page__content">
          {/* ---------------------------------------------------------- */}
          {/*                           HEADER                           */}
          {/* ---------------------------------------------------------- */}

          <div className="admin-events-page__header">
            <div className="admin-events-page__header-left">
              <h1>Events</h1>

              <p>
                Manage all platform events
              </p>
            </div>

            <button
              className="admin-events-page__create-btn"
              onClick={() =>
                setShowModal(true)
              }
            >
              + Create Event
            </button>
          </div>

          {/* ---------------------------------------------------------- */}
          {/*                         EVENTS TABLE                       */}
          {/* ---------------------------------------------------------- */}

          <div className="admin-events-page__table">
            <AdminEventTable />
          </div>
        </section>
      </main>

      {/* -------------------------------------------------------------- */}
      {/*                            MODAL                              */}
      {/* -------------------------------------------------------------- */}

      <EventModal
        isOpen={showModal}
        onClose={() =>
          setShowModal(false)
        }
      />
    </div>
  );
};

export default AdminEventsPage;