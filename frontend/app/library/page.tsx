"use client";

import { useState } from "react";

import LibSidebar from "@/components/organisms/LibSidebar/LibSidebar";
import LibraryHeader from "@/components/organisms/LibraryHeader/LibraryHeader";
import BookSection from "@/components/organisms/BookSection/BookSection";
import ProfileBar from "@/sections/profile/ProfileBar";

export default function Page() {
  // 🔥 COLLAPSE STATE (shared with sidebar)
  const [collapsed, setCollapsed] = useState(false);

  // 🔷 Filters
  const [filters, setFilters] = useState({
    college: "All Colleges",
    department: "All",
    subject: "All",
    semester: "All",
    type: "All",
    language: "All",
    price: "Free",
  });

  // 🔷 Search
  const [search, setSearch] = useState("");

  // 🔷 Sort
  const [sort, setSort] = useState("Popular");

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
        {/* 🔷 TOP BAR */}
        <ProfileBar />

        {/* 🔷 MAIN CONTENT */}
        <div
          style={{
            flex: 1,
            padding: "20px",
            overflowY: "auto",
          }}
        >
          <LibraryHeader
            filters={filters}
            setFilters={setFilters}
            search={search}
            setSearch={setSearch}
            sort={sort}
            setSort={setSort}
          />

          <BookSection />
        </div>
      </div>
    </div>
  );
}