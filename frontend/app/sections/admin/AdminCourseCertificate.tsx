"use client";

import React from "react";

import {
  RiAwardLine,
  RiUploadCloud2Line,
  RiPaletteLine,
  RiSendPlaneFill,
} from "react-icons/ri";

import { ADMIN_CERTIFICATE_TEMPLATES } from "@/constant/admin/adminCourseCertificate";

import "@/styles/sections/admin/adminCourseCertificate.scss";

const AdminCourseCertificate = () => {
  return (
    <section className="admin-course-certificate">
      {/* ------------------------------------------------------------------ */}
      {/*                               HEADER                               */}
      {/* ------------------------------------------------------------------ */}

      <div className="admin-course-certificate__header">
        <div>
          <h2>Course Certificate</h2>

          <p>
            Configure completion certificates for
            this course.
          </p>
        </div>

        <button className="publish-btn">
          <RiSendPlaneFill />

          Save Certificate
        </button>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/*                            CERTIFICATE                             */}
      {/* ------------------------------------------------------------------ */}

      <div className="admin-course-certificate__preview">
        {/* --------------------------- ICON ---------------------------- */}

        <div className="admin-course-certificate__icon">
          <RiAwardLine />
        </div>

        {/* ------------------------- CONTENT -------------------------- */}

        <div className="admin-course-certificate__content">
          <h3>Course Completion Certificate</h3>

          <p>
            Students will receive this certificate
            after successfully completing the
            course and final assessment.
          </p>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/*                                 FORM                               */}
      {/* ------------------------------------------------------------------ */}

      <form className="admin-course-certificate__form">
        {/* ---------------------- CERTIFICATE NAME ---------------------- */}

        <div className="admin-course-certificate__field full">
          <label>Certificate Title</label>

          <input
            type="text"
            placeholder="Advanced Data Structures Certificate"
          />
        </div>

        {/* ---------------------- TEMPLATE SELECT ---------------------- */}

        <div className="admin-course-certificate__field">
          <label>Certificate Template</label>

          <select>
            {ADMIN_CERTIFICATE_TEMPLATES.map(
              (item) => (
                <option key={item.id}>
                  {item.name}
                </option>
              )
            )}
          </select>
        </div>

        {/* ---------------------- SIGNATURE NAME ----------------------- */}

        <div className="admin-course-certificate__field">
          <label>Instructor Name</label>

          <input
            type="text"
            placeholder="John Doe"
          />
        </div>

        {/* ------------------------- LOGO ----------------------------- */}

        <div className="admin-course-certificate__upload">
          <div className="admin-course-certificate__upload-left">
            <div className="upload-icon">
              <RiPaletteLine />
            </div>

            <div>
              <h4>Certificate Logo</h4>

              <p>
                Upload institute or platform logo
              </p>
            </div>
          </div>

          <button type="button">
            <RiUploadCloud2Line />

            Upload Logo
          </button>
        </div>

        {/* ---------------------- ENABLE CERTIFICATE ------------------- */}

        <div className="admin-course-certificate__toggle">
          <div>
            <h4>Enable Certificates</h4>

            <p>
              Automatically issue certificates to
              students.
            </p>
          </div>

          <label className="switch">
            <input type="checkbox" />

            <span className="slider" />
          </label>
        </div>

        {/* -------------------------- ACTIONS -------------------------- */}

        <div className="admin-course-certificate__actions">
          <button
            type="button"
            className="draft-btn"
          >
            Save Draft
          </button>

          <button
            type="submit"
            className="save-btn"
          >
            <RiSendPlaneFill />

            Save Certificate
          </button>
        </div>
      </form>
    </section>
  );
};

export default AdminCourseCertificate;