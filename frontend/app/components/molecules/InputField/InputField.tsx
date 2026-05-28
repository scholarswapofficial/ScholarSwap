import {
  forwardRef,
  InputHTMLAttributes,
} from "react";

import styles from "@/styles/sections/auth/auth.module.scss";

type Props =
  InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    error?: string;
  };

const InputField = forwardRef<
  HTMLInputElement,
  Props
>(
  (
    {
      label,
      type,
      placeholder,
      error,
      ...rest
    },
    ref
  ) => {
    return (
      <div
        className={
          styles["input-field"]
        }
      >
        <label
          className={
            styles["input-label"]
          }
        >
          {label}
        </label>

        <input
          ref={ref}
          className={
            styles["input-control"]
          }
          type={type}
          placeholder={placeholder}
          {...rest}
        />

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

InputField.displayName =
  "InputField";

export default InputField;
