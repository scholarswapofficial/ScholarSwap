"use client";

import { SETTINGS_SIDEBAR } from "@/constant/settings";

const SettingsSidebar = ({ activeTab, setActiveTab }: any) => {
  return (
    <div className="settings__sidebar">
      <div className="sidebar__header">
        <h2>Settings</h2>
        <p>Manage your account</p>
      </div>

      <div className="sidebar__menu">
        {SETTINGS_SIDEBAR.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              className={`sidebar__item ${
                activeTab === item.id ? "active" : ""
              }`}
              onClick={() => setActiveTab(item.id)}
            >
              <Icon className="icon" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SettingsSidebar;