"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthTabs from "@/components/molecules/AuthTabs/AuthTabs";

import InputField from "@/components/molecules/InputField/InputField";

import PasswordField from "@/components/molecules/PasswordField/PasswordField";

import GoogleAuthButton from "@/components/google/GoogleAuthButton";

import {useAuth} from "@/context/AuthContext";
import { loginSchema,
  registerSchema,
  LoginInput,
  RegisterInput,
} from "@/schemas/auth.schemas";

import {
  loginUser,
  registerUser,
} from "@/services/auth.services";

import styles from "@/styles/sections/auth/auth.module.scss";

const AuthForm = () => {
  const [mode, setMode] = useState<"login" | "register">("login");
  const {signup, login} = useAuth();
   
  /* -------------------------------------------------------------------------- */
  /*                               LOGIN FORM                                   */
  /* -------------------------------------------------------------------------- */

  const {
    register: loginRegister,
    handleSubmit: handleLoginSubmit,
    formState: {
      errors: loginErrors,
      isSubmitting: isLoginSubmitting,
    },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  /* -------------------------------------------------------------------------- */
  /*                              REGISTER FORM                                 */
  /* -------------------------------------------------------------------------- */

  const {
    register: registerRegister,
    handleSubmit: handleRegisterSubmit,
    formState: {
      errors: registerErrors,
      isSubmitting: isRegisterSubmitting,
    },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  /* -------------------------------------------------------------------------- */
  /*                               LOGIN HANDLER                                */
  /* -------------------------------------------------------------------------- */

  const onLogin = async (
    data: LoginInput
  ) => {
    try {
      await login(data.email, data.password);
    } catch (error: any) {
      console.error(
        error?.response?.data ||
          "Login failed"
      );
    }
  };

  /* -------------------------------------------------------------------------- */
  /*                             REGISTER HANDLER                               */
  /* -------------------------------------------------------------------------- */

  const onRegister = async (
    data: RegisterInput
  ) => {
    try {
      if (!signup) {
        throw new Error("Signup function unavailable");
      }
      await signup(data.name, data.email, data.password, data.college);
    } catch (error: any) {
      console.error(
        error?.response?.data ||
          "Register failed"
      );
    }
  };

  return (
    <div className={styles["auth-card"]}>
      <h2 className={styles["auth-title"]}>
        {mode === "login"
          ? "Login to ScholarSwap"
          : "Create an account"}
      </h2>

      <p className={styles["auth-subtitle"]}>
        Welcome back! Please enter your
        details
      </p>

      <AuthTabs
        mode={mode}
        setMode={setMode}
      />

      {/* ------------------------------------------------------------------ */}
      {/*                             LOGIN FORM                             */}
      {/* ------------------------------------------------------------------ */}

      {mode === "login" && (
        <form
          className={
            styles["form-fields"]
          }
          onSubmit={handleLoginSubmit(
            onLogin
          )}
        >
          <InputField
            label="Email"
            type="email"
            placeholder="Enter your email"
            {...loginRegister("email")}
            error={
              loginErrors.email?.message
            }
          />

          <PasswordField
            {...loginRegister(
              "password"
            )}
            error={
              loginErrors.password
                ?.message
            }
          />

          <button
            type="submit"
            className={
              styles["submit-btn"]
            }
            disabled={
              isLoginSubmitting
            }
          >
            {isLoginSubmitting
              ? "Logging in..."
              : "Login"}
          </button>

          <div
            className={
              styles["divider"]
            }
          >
            <span>OR</span>
          </div>

          <GoogleAuthButton />
        </form>
      )}

      {/* ------------------------------------------------------------------ */}
      {/*                           REGISTER FORM                            */}
      {/* ------------------------------------------------------------------ */}

      {mode === "register" && (
        <form
          className={
            styles["form-fields"]
          }
          onSubmit={handleRegisterSubmit(
            onRegister
          )}
        >
          <InputField
            label="Name"
            type="text"
            placeholder="Enter your name"
            {...registerRegister("name")}
            error={
              registerErrors.name
                ?.message
            }
          />

          <select
            className={
              styles["select-field"]
            }
            {...registerRegister(
              "college"
            )}
          >
            <option value="">
              Select College
            </option>

            <option value="IIT">
              IIT
            </option>

            <option value="NIT">
              NIT
            </option>

            <option value="Tier 3 College">
              Tier 3 College
            </option>

            <option value="Other">
              Other
            </option>
          </select>

          {registerErrors.college && (
            <p
              className={
                styles["error-text"]
              }
            >
              {
                registerErrors
                  .college.message
              }
            </p>
          )}

          <InputField
            label="Email"
            type="email"
            placeholder="Enter your email"
            {...registerRegister("email")}
            error={
              registerErrors.email
                ?.message
            }
          />

          <PasswordField
            {...registerRegister(
              "password"
            )}
            error={
              registerErrors.password
                ?.message
            }
          />

          <button
            type="submit"
            className={
              styles["submit-btn"]
            }
            disabled={
              isRegisterSubmitting
            }
          >
            {isRegisterSubmitting
              ? "Creating account..."
              : "Register"}
          </button>

          <div
            className={
              styles["divider"]
            }
          >
            <span>OR</span>
          </div>

          <GoogleAuthButton />
        </form>
      )}
    </div>
  );
};

export default AuthForm;
