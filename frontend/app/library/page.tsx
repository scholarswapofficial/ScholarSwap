"use client";

import { useState } from "react";

import LibSidebar from "@/components/organisms/LibSidebar/LibSidebar";
import LibraryHeader from "@/components/organisms/LibraryHeader/LibraryHeader";
import BookSection from "@/components/organisms/BookSection/BookSection";

export default function Page() {
  // 🔷 Filters (must match keys in constants)
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
    <div style={{ display: "flex" }}>
      {/* 🔷 Sidebar */}
      <LibSidebar />

      {/* 🔷 Main Content */}
      <div style={{ flex: 1, padding: "20px" }}>
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
  );
}