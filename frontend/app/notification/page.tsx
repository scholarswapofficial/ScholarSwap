"use client";

import { useState } from "react";

import NotificationSection from "@/sections/home/NotificationSection";
import MobileHeaderSection from "@/sections/home/MobileHeaderSection";
import FeedTabs from "@/components/molecules/FeedTabs/FeedTabs";

export default function NotificationPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="notification-page">
      
      {/* MOBILE HEADER */}
      <MobileHeaderSection
        setMobileOpen={setMobileOpen}
      />

      {/* TOP TABS */}
      <FeedTabs />

      {/* NOTIFICATIONS */}
      <NotificationSection />

    </div>
  );
}