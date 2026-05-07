"use client";

import React from "react";

import { ADMIN_KPI_DATA } from "@/constant/admin/adminKpi";

import "@/styles/sections/admin/adminKpi.scss";

const AdminKpi = () => {
  return (
    <section className="admin-kpi">
      {ADMIN_KPI_DATA.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.id}
            className={`admin-kpi__card admin-kpi__card--${item.cardClass}`}
          >
            {/* ---------------------------------------------------------- */}
            {/*                         TOP SECTION                        */}
            {/* ---------------------------------------------------------- */}

            <div className="admin-kpi__top">
              <div className="admin-kpi__icon">
                <Icon />
              </div>

              <span className="admin-kpi__growth">{item.growth}</span>
            </div>

            {/* ---------------------------------------------------------- */}
            {/*                       CONTENT SECTION                      */}
            {/* ---------------------------------------------------------- */}

            <div className="admin-kpi__content">
              <h3>{item.value}</h3>

              <p>{item.title}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default AdminKpi;