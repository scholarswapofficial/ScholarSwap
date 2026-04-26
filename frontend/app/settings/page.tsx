"use client";

import { useState } from "react";

import SettingsSidebar from "@/sections/settings/SettingsSidebar";
import FeedTabs from "@/components/molecules/FeedTabs/FeedTabs";
// import NotificationPanel from "@/sections/settings/NotificationPanel";
// import AccountPanel from "@/sections/settings/AccountPanel";
// import PrivacyPanel from "@/sections/settings/PrivacyPanel";
// import PaymentsPanel from "@/sections/settings/PaymentsPanel";
// import PreferencesPanel from "@/sections/settings/PreferencesPanel";
// import HelpPanel from "@/sections/settings/HelpPanel";

import "@/styles/sections/settings/settings.scss";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("notifications");

  return (
    <div className="settings-page">
      {/* Top Tabs */}
      <FeedTabs />

      {/* Main Layout */}
      <div className="settings">
        <SettingsSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Future Content */}
        {/* <div className="settings__content">
          {renderPanel()}
        </div> */}
      </div>
    </div>
  );
}