"use client";

import { useState } from "react";
import { ACCOUNT_FIELDS } from "@/constant/settings";

const AccountControls = () => {
  const [email, setEmail] = useState("");
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const handlePasswordChange = (key: string, value: string) => {
    setPasswords((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSaveEmail = () => {
    console.log("Update email:", email);
    // 🔥 API call later
  };

  const handleChangePassword = () => {
    if (passwords.new !== passwords.confirm) {
      alert("Passwords do not match");
      return;
    }

    console.log("Change password:", passwords);
    // 🔥 API call later
  };

  const handleDeleteAccount = () => {
    alert("Account deletion requested");
  };

  return (
    <div className="settings__panel">
      <div className="panel__header">
        <h2>Account & Security</h2>
        <p>Manage your account credentials and security</p>
      </div>

      <div className="panel__content">

        {/* Email Section */}
        <div className="form-group">
          <label>{ACCOUNT_FIELDS.email.label}</label>
          <div className="form-row">
            <input
              type="email"
              placeholder={ACCOUNT_FIELDS.email.placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSaveEmail}>Save</button>
          </div>
        </div>

        {/* Password Section */}
        <div className="form-group">
          <label>{ACCOUNT_FIELDS.password.current.label}</label>
          <input
            type="password"
            placeholder={ACCOUNT_FIELDS.password.current.placeholder}
            value={passwords.current}
            onChange={(e) =>
              handlePasswordChange("current", e.target.value)
            }
          />
        </div>

        <div className="form-group">
          <label>{ACCOUNT_FIELDS.password.new.label}</label>
          <input
            type="password"
            placeholder={ACCOUNT_FIELDS.password.new.placeholder}
            value={passwords.new}
            onChange={(e) =>
              handlePasswordChange("new", e.target.value)
            }
          />
        </div>

        <div className="form-group">
          <label>{ACCOUNT_FIELDS.password.confirm.label}</label>
          <input
            type="password"
            placeholder={ACCOUNT_FIELDS.password.confirm.placeholder}
            value={passwords.confirm}
            onChange={(e) =>
              handlePasswordChange("confirm", e.target.value)
            }
          />
        </div>

        <button className="primary-btn" onClick={handleChangePassword}>
          Update Password
        </button>

        {/* Divider */}
        <div className="divider" />

        {/* Danger Zone */}
        <div className="danger-zone">
          <h3>Danger Zone</h3>
          <p>Deleting your account is irreversible</p>
          <button className="danger-btn" onClick={handleDeleteAccount}>
            Delete Account
          </button>
        </div>

      </div>
    </div>
  );
};

export default AccountControls;