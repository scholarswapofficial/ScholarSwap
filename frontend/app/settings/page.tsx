"use client";

import { useState } from "react";

import SettingsSidebar from "@/sections/settings/SettingsSidebar";
import MobileHeaderSection from "@/sections/home/MobileHeaderSection";

import FeedTabs from "@/components/molecules/FeedTabs/FeedTabs";

import NotificationControls from "@/sections/settings/NotificationControls";
import AccountControls from "@/sections/settings/AccountControls";
import PrivacyControls from "@/sections/settings/PrivacyControls";
import PreferencesControls from "@/sections/settings/PreferencesControls";
import HelpControls from "@/sections/settings/HelpControls";
import PaymentsControls from "@/sections/settings/PaymentsControls";

import "@/styles/sections/settings/help.scss";
import "@/styles/sections/settings/payments.scss";
import "@/styles/sections/settings/settings.scss";
import "@/styles/sections/settings/panels.scss";
import "@/styles/sections/settings/preferences.scss";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("notifications");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="settings-page">
      
      {/* MOBILE HEADER */}
      <MobileHeaderSection
        setMobileOpen={setMobileOpen}
      />

      {/* TOP TABS */}
      <FeedTabs />

      {/* MAIN LAYOUT */}
      <div className="settings">
        
        {/* SIDEBAR */}
        <SettingsSidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* CONTENT */}
        <div className="settings__content">
          {activeTab === "notifications" && <NotificationControls />}
          {activeTab === "account" && <AccountControls />}
          {activeTab === "payments" && <PaymentsControls />}
          {activeTab === "privacy" && <PrivacyControls />}
          {activeTab === "preferences" && <PreferencesControls />}
          {activeTab === "help" && <HelpControls />}
        </div>

      </div>
    </div>
  );
}