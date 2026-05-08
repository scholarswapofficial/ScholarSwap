"use client";

import React from "react";

import {
  RiSearchLine,
  RiMore2Fill,
  RiEyeLine,
} from "react-icons/ri";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

import {
  ADMIN_USER_TABLE,
  ADMIN_USER_ACTIVITY,
  ADMIN_USER_STATUS,
} from "@/constant/admin/adminUserStats";

import "@/styles/sections/admin/adminUserStats.scss";

const COLORS = ["#22C55E", "#3B82F6", "#F59E0B", "#EF4444"];

const AdminUserStats = () => {
  return (
    <section className="admin-user-stats">
      {/* ------------------------------------------------------------------ */}
      {/*                              LEFT SIDE                             */}
      {/* ------------------------------------------------------------------ */}

      <div className="admin-user-stats__left">
        {/* ----------------------------- HEADER -------------------------- */}

        <div className="admin-user-stats__top">
          <div className="admin-user-stats__tabs">
            <button className="active">All Users</button>
            <button>Students</button>
            <button>Creators</button>
            <button>Instructors</button>
          </div>

          <div className="admin-user-stats__search">
            <RiSearchLine />

            <input
              type="text"
              placeholder="Search users..."
            />
          </div>
        </div>

        {/* ------------------------------ TABLE -------------------------- */}

        <div className="admin-user-stats__table-wrapper">
          <table className="admin-user-stats__table">
            <thead>
              <tr>
                <th>User</th>
                <th>Role</th>
                <th>Status</th>
                <th>Verification</th>
                <th>Joined</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {ADMIN_USER_TABLE.map((user) => (
                <tr key={user.id}>
                  {/* ---------------- USER ---------------- */}

                  <td>
                    <div className="admin-user-stats__user">
                      <div className="admin-user-stats__avatar">
                        {user.name.charAt(0)}
                      </div>

                      <div>
                        <h4>{user.name}</h4>
                        <p>{user.username}</p>
                      </div>
                    </div>
                  </td>

                  {/* ---------------- ROLE ---------------- */}

                  <td>
                    <span className="role">
                      {user.role}
                    </span>
                  </td>

                  {/* --------------- STATUS --------------- */}

                  <td>
                    <span
                      className={`status ${user.status.toLowerCase()}`}
                    >
                      {user.status}
                    </span>
                  </td>

                  {/* ------------ VERIFICATION ------------ */}

                  <td>
                    <span
                      className={`verification ${user.verification.toLowerCase()}`}
                    >
                      {user.verification}
                    </span>
                  </td>

                  {/* ---------------- JOINED -------------- */}

                  <td>{user.joined}</td>

                  {/* --------------- ACTIONS -------------- */}

                  <td>
                    <div className="admin-user-stats__actions">
                      <button>
                        <RiEyeLine />
                      </button>

                      <button>
                        <RiMore2Fill />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/*                             RIGHT SIDE                             */}
      {/* ------------------------------------------------------------------ */}

      <div className="admin-user-stats__right">
        {/* ---------------------- USER STATUS -------------------------- */}

        <div className="admin-user-stats__card">
          <div className="admin-user-stats__card-header">
            <h3>User Status Overview</h3>
          </div>

          <div className="admin-user-stats__chart">
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={ADMIN_USER_STATUS}
                  dataKey="value"
                  outerRadius={80}
                  innerRadius={50}
                >
                  {ADMIN_USER_STATUS.map((_, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="admin-user-stats__legend">
            {ADMIN_USER_STATUS.map((item, index) => (
              <div key={index}>
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

        {/* ---------------------- RECENT ACTIVITY ---------------------- */}

        <div className="admin-user-stats__card">
          <div className="admin-user-stats__card-header">
            <h3>Recent Activity</h3>
          </div>

          <div className="admin-user-stats__activity">
            {ADMIN_USER_ACTIVITY.map((item) => (
              <div
                key={item.id}
                className="admin-user-stats__activity-item"
              >
                <div className="admin-user-stats__activity-dot" />

                <div>
                  <h4>{item.title}</h4>
                  <p>{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminUserStats;