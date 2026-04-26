"use client";

import { useState } from "react";

import LibSidebar from "@/components/organisms/LibSidebar/LibSidebar";
import LibHeader from "@/components/organisms/LibHeader/LibHeader";
import LibTabs from "@/components/organisms/LibTabs/LibTabs";
import LibNotesGrid from "@/components/organisms/LibNotesGrid/LibNotesGrid";
import FooterSection from "@/sections/auth/FooterSection";
import ProfileBar from "@/sections/profile/ProfileBar";

export default function Page() {
  // 🔥 COLLAPSE STATE (important for layout sync)
  const [collapsed, setCollapsed] = useState(false);

  const [filters, setFilters] = useState({
    college: "IIT Bombay",
    branch: "Computer Science",
    cgpa: "CGPA 9-10",
    price: "₹5-₹10",
  });

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Top Rated");
  const [activeTab, setActiveTab] = useState("Topper Notes");

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      
      {/* 🔷 SIDEBAR */}
      <LibSidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      {/* 🔷 RIGHT SIDE */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* 🔥 PROFILE BAR (TOP, STICKY) */}
        <ProfileBar />

        {/* 🔷 MAIN CONTENT */}
        <div
          style={{
            flex: 1,
            padding: "20px",
            overflowY: "auto",
          }}
        >
          <LibHeader
            filters={filters}
            setFilters={setFilters}
            search={search}
            setSearch={setSearch}
            sort={sort}
            setSort={setSort}
          />

          <LibTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          <LibNotesGrid />

          <FooterSection />
        </div>
      </div>
    </div>
  );
}