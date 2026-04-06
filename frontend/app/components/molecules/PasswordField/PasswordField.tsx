"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const PasswordField = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="input-field password-field">
      <label>Password</label>

      <div className="password-wrapper">
        <input
          type={show ? "text" : "password"}
          placeholder="Enter password"
        />

        <span onClick={() => setShow(!show)} className="eye-icon">
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </span>
      </div>
    </div>
  );
};

export default PasswordField;