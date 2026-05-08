"use client";

import React from "react";

import {
  RiLineChartLine,
  RiHashtag,
  RiGroupLine,
  RiEyeLine,
  RiTrophyLine,
} from "react-icons/ri";

import { ADMIN_TREND_KPI } from "@/constant/admin/adminTrendKpi";

import "@/styles/sections/admin/adminTrendKpi.scss";

const ICONS = {
  purple: <RiLineChartLine />,
  green: <RiHashtag />,
  orange: <RiGroupLine />,
  blue: <RiEyeLine />,
  pink: <RiTrophyLine />,
};

const AdminTrendKpi = () => {
  return (
    <section className="admin-trend-kpi">
      {/* ------------------------------------------------------------------ */}
      {/*                               HEADER                               */}
      {/* ------------------------------------------------------------------ */}

      <div className="admin-trend-kpi__header">
        <div>
          <h1>Trends</h1>

          <p>
            Discover what’s trending across the
            platform.
          </p>
        </div>

        <select>
          <option>Last 7 Days</option>

          <option>Last 30 Days</option>

          <option>Last 90 Days</option>
        </select>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/*                                KPI                                 */}
      {/* ------------------------------------------------------------------ */}

      <div className="admin-trend-kpi__grid">
        {ADMIN_TREND_KPI.map((item) => (
          <div
            key={item.id}
            className={`admin-trend-kpi__card admin-trend-kpi__card--${item.className}`}
          >
            {/* -------------------------- ICON -------------------------- */}

            <div className="admin-trend-kpi__icon">
              {ICONS[
                item.className as keyof typeof ICONS
              ]}
            </div>

            {/* ------------------------- CONTENT ------------------------ */}

            <div className="admin-trend-kpi__content">
              <h4>{item.title}</h4>

              <h2>{item.value}</h2>

              <div className="admin-trend-kpi__bottom">
                <span>{item.growth}</span>

                <p>{item.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdminTrendKpi;