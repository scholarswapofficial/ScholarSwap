"use client";

import { HELP_OPTIONS, LEGAL_LINKS } from "@/constant/settings";

const HelpControls = () => {
  return (
    <div className="settings__panel">
      <div className="panel__header">
        <h2>Help & Support</h2>
        <p>Get help and learn more about the platform</p>
      </div>

      <div className="panel__content">

        {/* Help Options */}
        <div className="help-section">
          {HELP_OPTIONS.map((item) => (
            <div key={item.id} className="help-item">
              <div className="help-item__info">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>

              <button className="help-btn">
                {item.action}
              </button>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider" />

        {/* Legal */}
        <div className="legal-section">
          <h4>Legal</h4>

          <div className="legal-links">
            {LEGAL_LINKS.map((item) => (
              <button key={item.id} className="legal-link">
                {item.label}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default HelpControls;