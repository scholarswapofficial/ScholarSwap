"use client";

import { useState } from "react";
import AuthTabs from "@/components/molecules/AuthTabs/AuthTabs";
import InputField from "@/components/molecules/InputField/InputField";
import PasswordField from "@/components/molecules/PasswordField/PasswordField";
import { FcGoogle } from "react-icons/fc";

import styles from "@/styles/sections/auth/auth.module.scss";

const AuthForm = () => {
  const [mode, setMode] = useState<"login" | "register">("login");

  return (
    <div className={styles["auth-card"]}>
      {/* Heading */}
      <h2 className={styles["auth-title"]}>
        {mode === "login" ? "Login to ScholarSwap" : "Create an account"}
      </h2>

      <p className={styles["auth-subtitle"]}>
        Welcome back! Please enter your details
      </p>

      {/* Tabs */}
      <AuthTabs mode={mode} setMode={setMode} />

      {/* Form */}
      <div className={styles["form-fields"]}>
        {mode === "register" && (
          <>
            <InputField
              label="Name"
              type="text"
              placeholder="Enter your name"
            />

            <select className={styles["select-field"]}>
              <option>Select College</option>
              <option>IIT</option>
              <option>NIT</option>
              <option>Tier 3 College</option>
              <option>Other</option>
            </select>
          </>
        )}

        <InputField
          label="Email"
          type="email"
          placeholder="Enter your email"
        />

        <PasswordField />

        <button className={styles["submit-btn"]}>
          {mode === "login" ? "Login" : "Register"}
        </button>

        {/* Divider */}
        <div className={styles["divider"]}>
          <span>OR</span>
        </div>

        {/* Google Login */}
        <button className={styles["google-btn"]}>
          <FcGoogle size={20} />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default AuthForm;