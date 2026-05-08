"use client";

import React from "react";

import {
  RiSearchLine,
  RiFilter3Line,
  RiDownloadLine,
  RiEyeLine,
} from "react-icons/ri";

import { ADMIN_COURSE_ENROLLED } from "@/constant/admin/adminCourseEnrolled";

import "@/styles/sections/admin/adminCourseEnrolled.scss";

const AdminCourseEnrolled = () => {
  return (
    <section className="admin-course-enrolled">
      {/* ------------------------------------------------------------------ */}
      {/*                               HEADER                               */}
      {/* ------------------------------------------------------------------ */}

      <div className="admin-course-enrolled__header">
        <div>
          <h2>Enrolled Students</h2>

          <p>
            Monitor students enrolled in platform
            courses.
          </p>
        </div>

        <button className="export-btn">
          <RiDownloadLine />

          Export Data
        </button>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/*                               FILTERS                              */}
      {/* ------------------------------------------------------------------ */}

      <div className="admin-course-enrolled__filters">
        {/* ---------------------------- SEARCH --------------------------- */}

        <div className="admin-course-enrolled__search">
          <RiSearchLine />

          <input
            type="text"
            placeholder="Search students or courses..."
          />
        </div>

        {/* --------------------------- ACTIONS --------------------------- */}

        <div className="admin-course-enrolled__actions">
          <button>
            <RiFilter3Line />

            Filters
          </button>

          <select>
            <option>All Courses</option>

            <option>Data Structures</option>

            <option>DBMS</option>
          </select>

          <select>
            <option>All Status</option>

            <option>Active</option>

            <option>Completed</option>
          </select>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/*                                TABLE                               */}
      {/* ------------------------------------------------------------------ */}

      <div className="admin-course-enrolled__table-wrapper">
        <table className="admin-course-enrolled__table">
          <thead>
            <tr>
              <th>#</th>

              <th>Student</th>

              <th>Course</th>

              <th>Amount</th>

              <th>College</th>

              <th>Branch</th>

              <th>Progress</th>

              <th>Status</th>

              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {ADMIN_COURSE_ENROLLED.map((item) => (
              <tr key={item.id}>
                {/* ---------------- ID ---------------- */}

                <td>{item.id}</td>

                {/* ------------- STUDENT ------------- */}

                <td>
                  <div className="admin-course-enrolled__student">
                    <div className="admin-course-enrolled__avatar">
                      {item.studentName.charAt(0)}
                    </div>

                    <div>
                      <h4>{item.studentName}</h4>

                      <p>{item.username}</p>
                    </div>
                  </div>
                </td>

                {/* ------------- COURSE -------------- */}

                <td>
                  <span className="course">
                    {item.course}
                  </span>
                </td>

                {/* ------------- AMOUNT -------------- */}

                <td>
                  <strong>{item.amount}</strong>
                </td>

                {/* ------------- COLLEGE ------------- */}

                <td>{item.college}</td>

                {/* ------------- BRANCH -------------- */}

                <td>{item.branch}</td>

                {/* ------------ PROGRESS ------------- */}

                <td>
                  <div className="admin-course-enrolled__progress">
                    <div className="bar">
                      <div
                        className="fill"
                        style={{
                          width: item.progress,
                        }}
                      />
                    </div>

                    <span>{item.progress}</span>
                  </div>
                </td>

                {/* ------------- STATUS -------------- */}

                <td>
                  <span
                    className={`status ${item.status.toLowerCase()}`}
                  >
                    {item.status}
                  </span>
                </td>

                {/* ------------- ACTIONS ------------- */}

                <td>
                  <button className="view-btn">
                    <RiEyeLine />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminCourseEnrolled;