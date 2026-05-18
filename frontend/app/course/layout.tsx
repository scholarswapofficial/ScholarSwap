"use client";

import { useState } from "react";

import CourseSidebar from "@/sections/courses/CourseSidebar";
import MobileCourseHeader from "@/sections/courses/MobileCourseHeader";

import FeedTabs from "@/components/molecules/FeedTabs/FeedTabs";

import "@/styles/sections/courses/courses.scss";
import "@/styles/sections/courses/sidebar.scss";
import "@/styles/sections/courses/hero.scss";
import "@/styles/sections/courses/category.scss";
import "@/styles/sections/courses/course-list.scss";
import "@/styles/sections/courses/mobile-header.scss";

export default function CoursesLayout({  children,}: {children: React.ReactNode;
}) {
  // MOBILE SIDEBAR
  const [mobileOpen, setMobileOpen] =
    useState(false);

  return (
    <div className="courses-page">
           {/* MOBILE HEADER */}
      <MobileCourseHeader
        setMobileOpen={setMobileOpen}
      />
 
<FeedTabs />

      {/* LAYOUT */}
      <div className="courses-layout">
        {/* SIDEBAR */}
        <CourseSidebar
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />

        {/* CONTENT */}
        <div className="courses-content">
          {children}
        </div>
      </div>
    </div>
  );
}