"use client";

import React from "react";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

import {
  ADMIN_LIBRARY_STATS,
  ADMIN_LIBRARY_TRANSACTIONS,
  ADMIN_BOOK_SUBJECTS,
  ADMIN_BOOK_REQUESTS,
} from "@/constant/admin/adminLibStats";

import "@/styles/sections/admin/adminLibStats.scss";

const COLORS = [
  "#2563EB",
  "#4F46E5",
  "#22C55E",
  "#F59E0B",
  "#CBD5E1",
];

const AdminLibStats = () => {
  return (
    <section className="admin-lib-stats">
      {/* ------------------------------------------------------------------ */}
      {/*                              LEFT SIDE                             */}
      {/* ------------------------------------------------------------------ */}

      <div className="admin-lib-stats__left">
        {/* --------------------------- QUICK STATS ----------------------- */}

        <div className="admin-lib-stats__kpis">
          {ADMIN_LIBRARY_STATS.map((item) => (
            <div
              key={item.id}
              className={`admin-lib-stats__kpi admin-lib-stats__kpi--${item.className}`}
            >
              <h4>{item.title}</h4>

              <h2>{item.value}</h2>

              <p>{item.growth}</p>
            </div>
          ))}
        </div>

        {/* ------------------------ TRANSACTIONS ------------------------ */}

        <div className="admin-lib-stats__table-card">
          <div className="admin-lib-stats__table-header">
            <h3>Transactions</h3>
          </div>

          <div className="admin-lib-stats__table-wrapper">
            <table className="admin-lib-stats__table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Username</th>
                  <th>Book</th>
                  <th>Amount</th>
                  <th>Purchased On</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {ADMIN_LIBRARY_TRANSACTIONS.map(
                  (item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>

                      <td>
                        <div className="admin-lib-stats__user">
                          <div className="admin-lib-stats__avatar">
                            {item.name.charAt(0)}
                          </div>

                          <div>
                            <h4>{item.username}</h4>

                            <p>{item.name}</p>
                          </div>
                        </div>
                      </td>

                      <td>{item.book}</td>

                      <td>
                        <strong>{item.amount}</strong>
                      </td>

                      <td>{item.date}</td>

                      <td>
                        <span className="paid">
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/*                             RIGHT SIDE                             */}
      {/* ------------------------------------------------------------------ */}

      <div className="admin-lib-stats__right">
        {/* ---------------------- BOOKS BY SUBJECT ---------------------- */}

        <div className="admin-lib-stats__card">
          <div className="admin-lib-stats__card-header">
            <h3>Books by Subject</h3>
          </div>

          <div className="admin-lib-stats__chart">
            <ResponsiveContainer
              width="100%"
              height={220}
            >
              <PieChart>
                <Pie
                  data={ADMIN_BOOK_SUBJECTS}
                  dataKey="value"
                  outerRadius={80}
                  innerRadius={50}
                >
                  {ADMIN_BOOK_SUBJECTS.map(
                    (_, index) => (
                      <Cell
                        key={index}
                        fill={COLORS[index]}
                      />
                    )
                  )}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="admin-lib-stats__legend">
            {ADMIN_BOOK_SUBJECTS.map(
              (item, index) => (
                <div key={index}>
                  <span
                    style={{
                      background:
                        COLORS[index],
                    }}
                  />

                  <p>{item.name}</p>
                </div>
              )
            )}
          </div>
        </div>

        {/* ---------------------- BOOK REQUESTS ------------------------ */}

        <div className="admin-lib-stats__card">
          <div className="admin-lib-stats__card-header">
            <h3>Student Book Requests</h3>
          </div>

          <div className="admin-lib-stats__requests">
            {ADMIN_BOOK_REQUESTS.map(
              (item) => (
                <div
                  key={item.id}
                  className="admin-lib-stats__request"
                >
                  <div className="admin-lib-stats__request-avatar">
                    {item.name.charAt(0)}
                  </div>

                  <div className="admin-lib-stats__request-content">
                    <h4>{item.name}</h4>

                    <p>{item.request}</p>

                    <span>{item.time}</span>
                  </div>
                </div>
              )
            )}
          </div>

          <button className="admin-lib-stats__view-btn">
            View All Requests
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdminLibStats;