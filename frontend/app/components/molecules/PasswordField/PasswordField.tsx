"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import styles from "@/styles/sections/auth/auth.module.scss";

const PasswordField = () => {
  const [show, setShow] = useState(false);

  return (
    <div className={`${styles["input-field"]} ${styles["password-field"]}`}>
      <label className={styles["input-label"]}>Password</label>

      <div className={styles["password-wrapper"]}>
        <input
          className={styles["input-control"]}
          type={show ? "text" : "password"}
          placeholder="Enter password"
        />

        <span
          onClick={() => setShow(!show)}
          className={styles["eye-icon"]}
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </span>
      </div>
    </div>
  );
};

export default PasswordField;