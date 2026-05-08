"use client";

import React from "react";

import {
  RiVideoFill,
  RiQuestionnaireFill,
  RiFileList3Fill,
  RiAddLine,
  RiEditLine,
  RiDeleteBin6Line,
  RiDragMove2Line,
  RiSendPlaneFill,
} from "react-icons/ri";

import {
  ADMIN_COURSE_CONTENT,
  ADMIN_COURSE_SUMMARY,
} from "@/constant/admin/adminCourseBuilder";

import "@/styles/sections/admin/adminCourseBuilder.scss";

const AdminCourseBuilder = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case "Video":
        return <RiVideoFill />;

      case "Quiz":
        return <RiQuestionnaireFill />;

      case "Test":
        return <RiFileList3Fill />;

      default:
        return <RiVideoFill />;
    }
  };

  return (
    <section className="admin-course-builder">
      {/* ------------------------------------------------------------------ */}
      {/*                               HEADER                               */}
      {/* ------------------------------------------------------------------ */}

      <div className="admin-course-builder__header">
        {/* ----------------------------- LEFT ---------------------------- */}

        <div>
          <h2>Course Content Builder</h2>

          <p>
            Add videos, quizzes and assessments
            in sequence.
          </p>
        </div>

        {/* ---------------------------- RIGHT ---------------------------- */}

        <div className="admin-course-builder__actions">
          <button className="add-btn">
            <RiAddLine />

            Add Content
          </button>

          <button className="push-btn">
            <RiSendPlaneFill />

            Push Course
          </button>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/*                            CONTENT LIST                            */}
      {/* ------------------------------------------------------------------ */}

      <div className="admin-course-builder__list">
        {ADMIN_COURSE_CONTENT.map((item) => (
          <div
            key={item.id}
            className="admin-course-builder__item"
          >
            {/* --------------------------- LEFT -------------------------- */}

            <div className="admin-course-builder__left">
              {/* ----------------------- NUMBER ---------------------- */}

              <div className="admin-course-builder__number">
                {item.id}
              </div>

              {/* ------------------------ ICON ----------------------- */}

              <div
                className={`admin-course-builder__icon ${
                  item.type.toLowerCase()
                }`}
              >
                {getIcon(item.type)}
              </div>

              {/* ---------------------- CONTENT ---------------------- */}

              <div className="admin-course-builder__content">
                <span>{item.type}</span>

                <h4>{item.title}</h4>

                <p>{item.meta}</p>
              </div>
            </div>

            {/* -------------------------- RIGHT ------------------------- */}

            <div className="admin-course-builder__right">
              {/* ----------------------- STATUS ---------------------- */}

              <span
                className={`status ${item.status.toLowerCase()}`}
              >
                {item.status}
              </span>

              {/* ----------------------- ACTIONS --------------------- */}

              <div className="admin-course-builder__buttons">
                <button>
                  <RiEditLine />
                </button>

                <button className="delete">
                  <RiDeleteBin6Line />
                </button>

                <button>
                  <RiDragMove2Line />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ------------------------------------------------------------------ */}
      {/*                               SUMMARY                              */}
      {/* ------------------------------------------------------------------ */}

      <div className="admin-course-builder__summary">
        {ADMIN_COURSE_SUMMARY.map((item) => (
          <div
            key={item.id}
            className="admin-course-builder__summary-card"
          >
            <h4>{item.title}</h4>

            <h2>{item.value}</h2>

            <p>{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdminCourseBuilder;