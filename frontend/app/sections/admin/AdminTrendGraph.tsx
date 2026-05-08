"use client";

import React from "react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

import {
  RiArrowRightUpLine,
  RiArrowRightDownLine,
} from "react-icons/ri";

import {
  ADMIN_TREND_GRAPH,
  ADMIN_TREND_TOPICS,
} from "@/constant/admin/adminTrendGraph";

import "@/styles/sections/admin/adminTrendGraph.scss";

const AdminTrendGraph = () => {
  return (
    <section className="admin-trend-graph">
      {/* ------------------------------------------------------------------ */}
      {/*                              LEFT SIDE                             */}
      {/* ------------------------------------------------------------------ */}

      <div className="admin-trend-graph__chart-card">
        {/* ---------------------------- HEADER --------------------------- */}

        <div className="admin-trend-graph__header">
          <div>
            <h2>Trend Activity</h2>

            <p>
              Analyze post activity and user
              engagement.
            </p>
          </div>

          <select>
            <option>Last 7 Days</option>

            <option>Last 30 Days</option>
          </select>
        </div>

        {/* ----------------------------- GRAPH -------------------------- */}

        <div className="admin-trend-graph__chart">
          <ResponsiveContainer
            width="100%"
            height={340}
          >
            <AreaChart data={ADMIN_TREND_GRAPH}>
              <XAxis dataKey="day" />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="engagement"
                stroke="#6D5DFC"
                fill="#6D5DFC"
                fillOpacity={0.12}
                strokeWidth={3}
              />

              <Area
                type="monotone"
                dataKey="posts"
                stroke="#22C55E"
                fill="#22C55E"
                fillOpacity={0.08}
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/*                             RIGHT SIDE                             */}
      {/* ------------------------------------------------------------------ */}

      <div className="admin-trend-graph__topics-card">
        {/* ---------------------------- HEADER --------------------------- */}

        <div className="admin-trend-graph__topics-header">
          <h3>Trending Topics</h3>

          <button>View all</button>
        </div>

        {/* ----------------------------- LIST --------------------------- */}

        <div className="admin-trend-graph__topics">
          {ADMIN_TREND_TOPICS.map((item) => (
            <div
              key={item.id}
              className="admin-trend-graph__topic"
            >
              {/* ------------------------- LEFT ------------------------ */}

              <div className="admin-trend-graph__topic-left">
                <div className="admin-trend-graph__rank">
                  {item.id}
                </div>

                <div>
                  <h4>{item.topic}</h4>

                  <p>{item.posts}</p>
                </div>
              </div>

              {/* ------------------------ RIGHT ------------------------ */}

              <div
                className={`admin-trend-graph__growth ${
                  item.direction === "up"
                    ? "up"
                    : "down"
                }`}
              >
                {item.direction === "up" ? (
                  <RiArrowRightUpLine />
                ) : (
                  <RiArrowRightDownLine />
                )}

                <span>{item.growth}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdminTrendGraph;