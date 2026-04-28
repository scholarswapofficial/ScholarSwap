"use client";

import { useState } from "react";
import { PRIVACY_SETTINGS } from "@/constant/settings";

const PrivacyControls = () => {
  const [state, setState] = useState({
    profileVisibility: true,
    messages: true,
    notesVisibility: true,
    activityStatus: false,
    tagging: true,
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
        <h2>Privacy Settings</h2>
        <p>Manage your privacy and visibility</p>
      </div>

      <div className="panel__content">
        {PRIVACY_SETTINGS.map((item) => (
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

export default PrivacyControls;

/* 🔹 Reusable Row (same pattern as notification) */
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