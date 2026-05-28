"use client";

import {
  useState,
  forwardRef,
  InputHTMLAttributes,
} from "react";

import {
  Eye,
  EyeOff,
} from "lucide-react";

import styles from "@/styles/sections/auth/auth.module.scss";

type Props =
  InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    error?: string;
  };

const PasswordField = forwardRef<
  HTMLInputElement,
  Props
>(
  (
    {
      label = "Password",
      placeholder = "Enter password",
      error,
      ...rest
    },
    ref
  ) => {
    const [show, setShow] =
      useState(false);

    return (
      <div
        className={`${styles["input-field"]} ${styles["password-field"]}`}
      >
        <label
          className={
            styles["input-label"]
          }
        >
          {label}
        </label>

        <div
          className={
            styles["password-wrapper"]
          }
        >
          <input
            ref={ref}
            className={
              styles["input-control"]
            }
            type={
              show
                ? "text"
                : "password"
            }
            placeholder={placeholder}
            {...rest}
          />

          <span
            onClick={() =>
              setShow(!show)
            }
            className={
              styles["eye-icon"]
            }
          >
            {show ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </span>
        </div>

        {error && (
          <p
            className={
              styles["error-text"]
            }
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

PasswordField.displayName =
  "PasswordField";

export default PasswordField;
