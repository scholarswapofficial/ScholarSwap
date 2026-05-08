"use client";

import React from "react";

import {
  RiImageAddLine,
  RiUploadCloud2Line,
  RiSendPlaneFill,
} from "react-icons/ri";

import {
  ADMIN_COURSE_CATEGORIES,
  ADMIN_COURSE_LEVELS,
  ADMIN_COURSE_LANGUAGES,
} from "@/constant/admin/adminCourseInfo";

import "@/styles/sections/admin/adminCourseInfo.scss";

const AdminCourseInfo = () => {
  return (
    <section className="admin-course-info">
      {/* ------------------------------------------------------------------ */}
      {/*                               HEADER                               */}
      {/* ------------------------------------------------------------------ */}

      <div className="admin-course-info__header">
        <div>
          <h2>Course Information</h2>

          <p>
            Configure course details, pricing and
            visibility.
          </p>
        </div>

        <button className="push-btn">
          <RiSendPlaneFill />

          Push Course
        </button>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/*                            THUMBNAIL                               */}
      {/* ------------------------------------------------------------------ */}

      <div className="admin-course-info__thumbnail">
        <div className="admin-course-info__thumbnail-icon">
          <RiImageAddLine />
        </div>

        <div>
          <h4>Upload Course Thumbnail</h4>

          <p>
            Recommended size 1280 × 720px
          </p>
        </div>

        <button>
          <RiUploadCloud2Line />

          Upload
        </button>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/*                                 FORM                               */}
      {/* ------------------------------------------------------------------ */}

      <form className="admin-course-info__form">
        {/* ------------------------- TITLE ------------------------- */}

        <div className="admin-course-info__field full">
          <label>Course Title</label>

          <input
            type="text"
            placeholder="Complete Data Structures Bootcamp"
          />
        </div>

        {/* ---------------------- DESCRIPTION ---------------------- */}

        <div className="admin-course-info__field full">
          <label>Course Description</label>

          <textarea
            placeholder="Write a detailed course description..."
            rows={5}
          />
        </div>

        {/* ----------------------- CATEGORY ------------------------ */}

        <div className="admin-course-info__field">
          <label>Category</label>

          <select>
            {ADMIN_COURSE_CATEGORIES.map(
              (item, index) => (
                <option key={index}>
                  {item}
                </option>
              )
            )}
          </select>
        </div>

        {/* ------------------------- LEVEL ------------------------- */}

        <div className="admin-course-info__field">
          <label>Level</label>

          <select>
            {ADMIN_COURSE_LEVELS.map(
              (item, index) => (
                <option key={index}>
                  {item}
                </option>
              )
            )}
          </select>
        </div>

        {/* ----------------------- LANGUAGE ------------------------ */}

        <div className="admin-course-info__field">
          <label>Language</label>

          <select>
            {ADMIN_COURSE_LANGUAGES.map(
              (item, index) => (
                <option key={index}>
                  {item}
                </option>
              )
            )}
          </select>
        </div>

        {/* ------------------------- PRICE ------------------------- */}

        <div className="admin-course-info__field">
          <label>Course Price</label>

          <div className="price-input">
            <span>₹</span>

            <input
              type="number"
              placeholder="499"
            />
          </div>
        </div>

        {/* ------------------------- TAGS -------------------------- */}

        <div className="admin-course-info__field full">
          <label>Course Tags</label>

          <input
            type="text"
            placeholder="DSA, Arrays, Linked List, Interview Prep"
          />
        </div>

        {/* ----------------------- CHECKBOX ------------------------ */}

        <div className="admin-course-info__toggle">
          <div>
            <h4>Publish Course</h4>

            <p>
              Make this course visible on the
              platform.
            </p>
          </div>

          <label className="switch">
            <input type="checkbox" />

            <span className="slider" />
          </label>
        </div>

        {/* ------------------------- ACTIONS ----------------------- */}

        <div className="admin-course-info__actions">
          <button
            type="button"
            className="draft-btn"
          >
            Save Draft
          </button>

          <button
            type="submit"
            className="publish-btn"
          >
            <RiSendPlaneFill />

            Push Course
          </button>
        </div>
      </form>
    </section>
  );
};

export default AdminCourseInfo;