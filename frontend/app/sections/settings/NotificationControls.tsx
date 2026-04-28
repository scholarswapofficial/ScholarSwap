"use client";

import { useState } from "react";
import { NOTIFICATION_SETTINGS } from "@/constant/settings";

const NotificationControls = () => {
  const [state, setState] = useState({
    likes: true,
    comments: true,
    mentions: true,
    friendRequests: true,
    followers: false,
    marketplace: true,
  });

  const toggle = (key: string) => {
    setState((prev: any) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="settings__panel">
      <div className="panel__header">
        <h2>Notifications</h2>
        <p>Control how you receive notifications</p>
      </div>

      <div className="panel__content">
        {NOTIFICATION_SETTINGS.map((item) => (
          <SettingRow
            key={item.id}
            title={item.title}
            desc={item.desc}
            value={state[item.id as keyof typeof state]}
            onChange={() => toggle(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default NotificationControls;

// 🔹 Reusable row
const SettingRow = ({ title, desc, value, onChange }: any) => {
  return (
    <div className="setting-row">
      <div className="setting-row__info">
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>

      <button
        className={`toggle ${value ? "active" : ""}`}
        onClick={onChange}
      >
        <span />
      </button>
    </div>
  );
};