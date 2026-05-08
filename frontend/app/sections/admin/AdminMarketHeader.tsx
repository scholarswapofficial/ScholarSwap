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
  ADMIN_MARKET_KPI,
  ADMIN_MARKET_GRAPH,
  ADMIN_MARKET_CATEGORIES,
} from "@/constant/admin/adminMarketHeader";

import "@/styles/sections/admin/adminMarketHeader.scss";

const COLORS = [
  "#6D5DFC",
  "#2563EB",
  "#22C55E",
  "#F59E0B",
  "#CBD5E1",
];

const AdminMarketHeader = () => {
  return (
    <section className="admin-market-header">
      {/* ------------------------------------------------------------------ */}
      {/*                               HEADER                               */}
      {/* ------------------------------------------------------------------ */}

      <div className="admin-market-header__title">
        <h1>Marketplace</h1>

        <p>
          Manage marketplace listings, transactions
          and sellers.
        </p>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/*                                 KPI                                */}
      {/* ------------------------------------------------------------------ */}

      <div className="admin-market-header__kpis">
        {ADMIN_MARKET_KPI.map((item) => (
          <div
            key={item.id}
            className={`admin-market-header__kpi admin-market-header__kpi--${item.className}`}
          >
            <h4>{item.title}</h4>

            <h2>{item.value}</h2>

            <p>{item.growth}</p>
          </div>
        ))}
      </div>

      {/* ------------------------------------------------------------------ */}
      {/*                               CONTENT                              */}
      {/* ------------------------------------------------------------------ */}

      <div className="admin-market-header__content">
        {/* ---------------------------- GRAPH --------------------------- */}

        <div className="admin-market-header__graph-card">
          <div className="admin-market-header__card-header">
            <h3>Sales Overview</h3>

            <select>
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>

          <div className="admin-market-header__graph">
            <ResponsiveContainer
              width="100%"
              height={300}
            >
              <LineChart
                data={ADMIN_MARKET_GRAPH}
              >
                <XAxis dataKey="day" />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#6D5DFC"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* ------------------------- CATEGORIES ------------------------- */}

        <div className="admin-market-header__category-card">
          <div className="admin-market-header__card-header">
            <h3>Top Categories</h3>
          </div>

          <div className="admin-market-header__chart">
            <ResponsiveContainer
              width="100%"
              height={240}
            >
              <PieChart>
                <Pie
                  data={ADMIN_MARKET_CATEGORIES}
                  dataKey="value"
                  outerRadius={85}
                  innerRadius={55}
                >
                  {ADMIN_MARKET_CATEGORIES.map(
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

          <div className="admin-market-header__legend">
            {ADMIN_MARKET_CATEGORIES.map(
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
      </div>
    </section>
  );
};

export default AdminMarketHeader;