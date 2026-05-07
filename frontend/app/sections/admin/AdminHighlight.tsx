"use client";

import React from "react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import {
  PLATFORM_OVERVIEW_DATA,
  TOP_COURSES,
  USER_DEMOGRAPHICS,
  TOP_PRODUCTS,
} from "@/constant/admin/adminHighlight";

import "@/styles/sections/admin/adminHighlight.scss";

const COLORS = ["#6D5DFC", "#4DA3FF", "#FF6B9C", "#22C55E"];

const AdminHighlight = () => {
  return (
    <section className="admin-highlight">
      {/* ------------------------------------------------------------------ */}
      {/*                              ROW 1                                 */}
      {/* ------------------------------------------------------------------ */}

      <div className="admin-highlight__row">
        {/* --------------------- PLATFORM OVERVIEW ---------------------- */}

        <div className="admin-highlight__card admin-highlight__card--graph">
          <div className="admin-highlight__header">
            <h3>Platform Overview</h3>
            <p>Monthly active users growth</p>
          </div>

          <div className="admin-highlight__chart">
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={PLATFORM_OVERVIEW_DATA}>
                <XAxis dataKey="month" />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="#6D5DFC"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* ---------------------- TOP COURSES --------------------------- */}

        <div className="admin-highlight__card">
          <div className="admin-highlight__header">
            <h3>Top Performing Courses</h3>
            <p>Highest engagement this month</p>
          </div>

          <div className="admin-highlight__list">
            {TOP_COURSES.map((course) => (
              <div
                key={course.id}
                className="admin-highlight__list-item"
              >
                <div>
                  <h4>{course.title}</h4>
                  <span>{course.students}</span>
                </div>

                <strong>{course.revenue}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/*                              ROW 2                                 */}
      {/* ------------------------------------------------------------------ */}

      <div className="admin-highlight__row">
        {/* --------------------- USER DEMOGRAPHICS ---------------------- */}

        <div className="admin-highlight__card">
          <div className="admin-highlight__header">
            <h3>User Demographics</h3>
            <p>Audience distribution</p>
          </div>

          <div className="admin-highlight__pie">
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie
                  data={USER_DEMOGRAPHICS}
                  dataKey="value"
                  outerRadius={90}
                  innerRadius={55}
                >
                  {USER_DEMOGRAPHICS.map((_, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="admin-highlight__legend">
            {USER_DEMOGRAPHICS.map((item, index) => (
              <div
                key={index}
                className="admin-highlight__legend-item"
              >
                <span
                  style={{
                    background: COLORS[index],
                  }}
                />

                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ---------------------- TOP PRODUCTS -------------------------- */}

        <div className="admin-highlight__card">
          <div className="admin-highlight__header">
            <h3>Top Selling Products</h3>
            <p>Best marketplace performance</p>
          </div>

          <div className="admin-highlight__list">
            {TOP_PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="admin-highlight__list-item"
              >
                <div>
                  <h4>{product.title}</h4>
                  <span>{product.sales}</span>
                </div>

                <strong>{product.earnings}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminHighlight;