"use client";

import { useState } from "react";
import {
  PREFERENCE_SETTINGS,
  LANGUAGE_OPTIONS,
} from "@/constant/settings";

const PreferencesControls = () => {
  const [state, setState] = useState({
    autoPlayVideos: true,
    emailDigest: false,
    recommendations: true,
  });

  const [language, setLanguage] = useState("en");

  const toggle = (key: string) => {
    setState((prev: any) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="settings__panel">
      <div className="panel__header">
        <h2>Preferences</h2>
        <p>Customize your app experience</p>
      </div>

      <div className="panel__content">

        {/* Toggles */}
        {PREFERENCE_SETTINGS.map((item) => (
          <div key={item.id} className="setting-row">
            <div className="setting-row__info">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>

            <button
              className={`toggle ${
                state[item.id as keyof typeof state] ? "active" : ""
              }`}
              onClick={() => toggle(item.id)}
            >
              <span />
            </button>
          </div>
        ))}

        {/* Divider */}
        <div className="divider" />

        {/* Language */}
        <div className="form-group">
          <label>Language</label>
          <select
            className="pref-select"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            {LANGUAGE_OPTIONS.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>

      </div>
    </div>
  );
};

export default PreferencesControls;