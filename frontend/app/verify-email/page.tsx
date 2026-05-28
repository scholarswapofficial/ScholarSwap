"use client";

import { useEffect, useState } from "react";

import { useAuth } from "@/context/AuthContext";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

import {
  Mail,
  ShieldCheck,
  CircleX,
  CheckCheck,
} from "lucide-react";

import styles from "@/styles/sections/auth/verify.module.scss";

const VerifyEmailPage = () => {
  const searchParams =
    useSearchParams();

  const token =
    searchParams.get("token");

  const { verifyEmail } =
    useAuth();

  const router = useRouter();

  const [status, setStatus] =
    useState("loading");

  const [message, setMessage] =
    useState("");

  useEffect(() => {
    if (!token) {
      setStatus("error");

      setMessage(
        "Invalid verification link"
      );

      return;
    }

    const runVerification =
      async () => {
        if (!verifyEmail) {
          setStatus("error");

          setMessage(
            "Verification service unavailable"
          );

          return;
        }

        try {
          await verifyEmail(token);

          setStatus("success");

          setMessage(
            "Your email has been verified and your account is now active."
          );

          setTimeout(() => {
            router.push("/auth");
          }, 2500);
        } catch (error) {
          setStatus("error");

          setMessage(
            error.message ||
              "The verification link is invalid or has expired."
          );
        }
      };

    runVerification();
  }, [token]);

  return (
    <div className={styles.verifyPage}>
      <div
        className={`${styles.verifyCard} ${
          styles[status]
        }`}
      >
        {/* TOP STATUS LINE */}
        <div
          className={styles.topLine}
        />

        {/* ICON SECTION */}
        <div className={styles.iconWrapper}>
          {status === "loading" && (
            <div className={styles.loader}>
              <div
                className={
                  styles.loaderTrack
                }
              />

              <div
                className={
                  styles.loaderSpin
                }
              />

              <div
                className={
                  styles.loaderCenter
                }
              >
                <Mail size={30} />
              </div>
            </div>
          )}

          {status === "success" && (
            <div
              className={`${styles.statusIcon} ${styles.successIcon}`}
            >
              <CheckCheck size={42} />
            </div>
          )}

          {status === "error" && (
            <div
              className={`${styles.statusIcon} ${styles.errorIcon}`}
            >
              <CircleX size={42} />
            </div>
          )}
        </div>

        {/* TITLE */}
        <h1 className={styles.title}>
          {status === "loading" &&
            "Verifying your email"}

          {status === "success" &&
            "Email verified successfully!"}

          {status === "error" &&
            "Verification failed"}
        </h1>

        {/* MESSAGE */}
        <p className={styles.message}>
          {status === "loading"
            ? "Please wait while we verify your email address."
            : message}
        </p>

        {/* INFO BOX */}
        {status === "loading" && (
          <div className={styles.infoBox}>
            <ShieldCheck size={18} />

            <span>
              Securing your account
              and activating access...
            </span>
          </div>
        )}

        {/* SUCCESS */}
        {status === "success" && (
          <div
            className={`${styles.infoBox} ${styles.successBox}`}
          >
            <div
              className={
                styles.progressWrapper
              }
            >
              <div
                className={
                  styles.progressBar
                }
              />
            </div>

            <span>
              Redirecting you to the
              login page...
            </span>
          </div>
        )}

        {/* ERROR */}
        {status === "error" && (
          <>
            <div
              className={`${styles.infoBox} ${styles.errorBox}`}
            >
              Please check your email
              for the correct link or
              request a new verification
              email.
            </div>

            <button
              onClick={() =>
                router.push("/auth")
              }
              className={
                styles.backButton
              }
            >
              Back to Login
            </button>
          </>
        )}

        {/* FOOTER */}
        <div className={styles.footer}>
          <ShieldCheck size={14} />

          <span>
            Protected with secure
            verification
          </span>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailPage;