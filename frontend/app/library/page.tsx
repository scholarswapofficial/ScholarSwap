"use client";

import { useState } from "react";

import ProfileBar from "@/sections/profile/ProfileBar";
import LibSidebar from "@/components/organisms/LibSidebar/LibSidebar";
import LibraryHeader from "@/components/organisms/LibraryHeader/LibraryHeader";
import BookSection from "@/components/organisms/BookSection/BookSection";

export default function Page() {
  // SIDEBAR COLLAPSE
  const [collapsed, setCollapsed] =
    useState(false);

  // MOBILE DRAWER
  const [mobileOpen, setMobileOpen] =
    useState(false);

  // FILTERS
  const [filters, setFilters] =
    useState({
      college: "All Colleges",
      department: "All",
      subject: "All",
      semester: "All",
      type: "All",
      language: "All",
      price: "Free",
    });

  // SEARCH
  const [search, setSearch] =
    useState("");

  // SORT
  const [sort, setSort] =
    useState("Popular");

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
      }}
    >
      {/* SIDEBAR */}
      <LibSidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* RIGHT SIDE */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* TOP BAR */}
        <ProfileBar
          setMobileOpen={setMobileOpen}
        />

        {/* MAIN */}
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
