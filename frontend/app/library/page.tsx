"use client";

import { useState } from "react";
import LibSidebar from "@/components/organisms/LibSidebar/LibSidebar";
import LibHeader from "@/components/organisms/LibHeader/LibHeader";
import LibTabs from "@/components/organisms/LibTabs/LibTabs";
import LibNotesGrid from "@/components/organisms/LibNotesGrid/LibNotesGrid";
import FooterSection from "@/sections/auth/FooterSection";

export default function Page() {
  const [filters, setFilters] = useState({
    college: "IIT Bombay",
    branch: "Computer Science",
    cgpa: "CGPA 9-10",
    price: "₹5-₹10",
  });

  // 🔷 Search
  const [search, setSearch] = useState("");

  // 🔷 Sort
  const [sort, setSort] = useState("Top Rated");

  // 🔷 Tabs
  const [activeTab, setActiveTab] = useState("Topper Notes");

  return (
    <div style={{ display: "flex" }}>
      <LibSidebar />

      <div style={{ flex: 1, padding: "20px" }}>
        <LibHeader  filters={filters}  setFilters={setFilters}
          search={search}
          setSearch={setSearch}
          sort={sort}
          setSort={setSort}
        />

        <LibTabs activeTab={activeTab} setActiveTab={setActiveTab} />
<LibNotesGrid />
<FooterSection/>
      </div>
    </div>
  );
}