"use client";

import React from "react";

import { ADMIN_USER_KPI } from "@/constant/admin/adminUserKpi";

import "@/styles/sections/admin/adminUserKpi.scss";

const AdminUserKpi = () => {
  return (
    <section className="admin-user-kpi">
      {ADMIN_USER_KPI.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.id}
            className={`admin-user-kpi__card admin-user-kpi__card--${item.className}`}
          >
            {/* ---------------------------------------------------------- */}
            {/*                             TOP                            */}
            {/* ---------------------------------------------------------- */}

            <div className="admin-user-kpi__top">
              <div className="admin-user-kpi__icon">
                <Icon />
              </div>

              <span className="admin-user-kpi__growth">
                {item.growth}
              </span>
            </div>

            {/* ---------------------------------------------------------- */}
            {/*                           CONTENT                          */}
            {/* ---------------------------------------------------------- */}

            <div className="admin-user-kpi__content">
              <h3>{item.value}</h3>

              <p>{item.title}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default AdminUserKpi;