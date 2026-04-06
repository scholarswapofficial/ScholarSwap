"use client";

import { useState } from "react";
import AuthTabs from "@/components/molecules/AuthTabs/AuthTabs";
import InputField from "@/components/molecules/InputField/InputField";
import PasswordField from "@/components/molecules/PasswordField/PasswordField";
import { FcGoogle } from "react-icons/fc";

const AuthForm = () => {
  const [mode, setMode] = useState<"login" | "register">("login");

  return (
    <div className="auth-card">
      {/* Heading */}
      <h2 className="auth-title">Login to ScholarSwap</h2>
      <p className="auth-subtitle">Welcome back! Please enter your details</p>

      {/* Tabs */}
      <AuthTabs mode={mode} setMode={setMode} />

      {/* Form */}
      <div className="form-fields">
        {mode === "register" && (
          <>
            <InputField label="Name" type="text" placeholder="Enter your name" />

            <select className="select-field">
              <option>Select College</option>
              <option>IIT</option>
              <option>NIT</option>
              <option>Tier 3 College</option>
              <option>Other</option>
            </select>
          </>
        )}

        <InputField label="Email" type="email" placeholder="Enter your email" />
        <PasswordField />

        <button className="submit-btn">
          {mode === "login" ? "Login" : "Register"}
        </button>

        {/* Divider */}
        <div className="divider">
          <span>OR</span>
        </div>

        {/* Google Login */}
        <button className="google-btn">
          <FcGoogle size={20} />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default AuthForm;