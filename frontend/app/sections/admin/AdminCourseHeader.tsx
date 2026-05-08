"use client";

import React from "react";

import {
  RiBookOpenLine,
  RiUserStarLine,
  RiVideoLine,
  RiBarChartBoxLine,
  RiSendPlaneFill,
} from "react-icons/ri";

import { ADMIN_COURSE_KPI } from "@/constant/admin/adminCourseHeader";

import "@/styles/sections/admin/adminCourseHeader.scss";

const ICONS = {
  purple: <RiBookOpenLine />,
  green: <RiUserStarLine />,
  orange: <RiVideoLine />,
  blue: <RiBarChartBoxLine />,
};

const AdminCourseHeader = () => {
  return (
    <section className="admin-course-header">
      {/* ------------------------------------------------------------------ */}
      {/*                                TOP                                 */}
      {/* ------------------------------------------------------------------ */}

      <div className="admin-course-header__top">
        {/* ----------------------------- LEFT ---------------------------- */}

        <div className="admin-course-header__left">
          <h1>Courses</h1>

          <p>
            Create and manage courses, quizzes
            and certifications.
          </p>
        </div>

        {/* ---------------------------- RIGHT ---------------------------- */}

        <div className="admin-course-header__actions">
          <button className="cancel-btn">
            Cancel
          </button>

          <button className="push-btn">
            <RiSendPlaneFill />

            Push Course
          </button>
        </div>
      </div>
      {/* ------------------------------------------------------------------ */}
      {/*                                KPI                                 */}
      {/* ------------------------------------------------------------------ */}

      <div className="admin-course-header__kpis">
        {ADMIN_COURSE_KPI.map((item) => (
          <div
            key={item.id}
            className={`admin-course-header__card admin-course-header__card--${item.className}`}
          >
            {/* -------------------------- ICON -------------------------- */}

            <div className="admin-course-header__icon">
              {
                ICONS[
                  item.className as keyof typeof ICONS
                ]
              }
            </div>

            {/* ------------------------ CONTENT ------------------------- */}

            <div className="admin-course-header__content">
              <h4>{item.title}</h4>

              <h2>{item.value}</h2>

              <p>{item.growth}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdminCourseHeader;