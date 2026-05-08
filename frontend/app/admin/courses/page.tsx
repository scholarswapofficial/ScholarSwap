"use client";

import React, { useState } from "react";

/* -------------------------------------------------------------------------- */
/*                                 SECTIONS                                   */
/* -------------------------------------------------------------------------- */

import AdminSidebar from "@/sections/admin/AdminSidebar";
import AdminTopbar from "@/sections/admin/AdminTopbar";

import AdminCourseHeader from "@/sections/admin/AdminCourseHeader";

import AdminCourseBuilder from "@/sections/admin/AdminCourseBuilder";
import AdminCourseInfo from "@/sections/admin/AdminCourseInfo";

import AdminCourseCertificate from "@/sections/admin/AdminCourseCertificate";

import AdminCourseEnrolled from "@/sections/admin/AdminCourseEnrolled";

/* -------------------------------------------------------------------------- */
/*                                   STYLES                                   */
/* -------------------------------------------------------------------------- */

import "@/styles/sections/admin/admin-courses-page.scss";

const AdminCoursesPage = () => {
  const [activeTab, setActiveTab] =
    useState("content");

  return (
    <div className="admin-courses-page">
      {/* ------------------------------------------------------------------ */}
      {/*                              SIDEBAR                               */}
      {/* ------------------------------------------------------------------ */}

      <aside className="admin-courses-page__sidebar">
        <AdminSidebar />
      </aside>

      {/* ------------------------------------------------------------------ */}
      {/*                             MAIN AREA                              */}
      {/* ------------------------------------------------------------------ */}

      <main className="admin-courses-page__main">
        {/* -------------------------------------------------------------- */}
        {/*                            TOPBAR                             */}
        {/* -------------------------------------------------------------- */}

        <header className="admin-courses-page__topbar">
          <AdminTopbar />
        </header>

        {/* -------------------------------------------------------------- */}
        {/*                           CONTENT                              */}
        {/* -------------------------------------------------------------- */}

        <section className="admin-courses-page__content">
          {/* ---------------------------------------------------------- */}
          {/*                            HEADER                          */}
          {/* ---------------------------------------------------------- */}

          <div className="admin-courses-page__header">
            <AdminCourseHeader />
          </div>

          {/* ---------------------------------------------------------- */}
          {/*                             TABS                           */}
          {/* ---------------------------------------------------------- */}

          <div className="admin-courses-page__tabs">
            <button
              className={
                activeTab === "content"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveTab("content")
              }
            >
              Course Content
            </button>

            <button
              className={
                activeTab === "certificate"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveTab("certificate")
              }
            >
              Certificate
            </button>

            <button
              className={
                activeTab === "students"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveTab("students")
              }
            >
              Students
            </button>
          </div>

          {/* ---------------------------------------------------------- */}
          {/*                       COURSE CONTENT                       */}
          {/* ---------------------------------------------------------- */}

          {activeTab === "content" && (
            <div className="admin-courses-page__body">
              {/* ---------------------- BUILDER ---------------------- */}

              <div className="admin-courses-page__builder">
                <AdminCourseBuilder />
              </div>

              {/* ------------------------ INFO ----------------------- */}

              <div className="admin-courses-page__info">
                <AdminCourseInfo />
              </div>
            </div>
          )}

          {/* ---------------------------------------------------------- */}
          {/*                         CERTIFICATE                        */}
          {/* ---------------------------------------------------------- */}

          {activeTab === "certificate" && (
            <div className="admin-courses-page__certificate">
              <AdminCourseCertificate />
            </div>
          )}

          {/* ---------------------------------------------------------- */}
          {/*                           STUDENTS                         */}
          {/* ---------------------------------------------------------- */}

          {activeTab === "students" && (
            <div className="admin-courses-page__students">
              <AdminCourseEnrolled />
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default AdminCoursesPage;