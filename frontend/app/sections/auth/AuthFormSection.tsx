"use client";

import AuthForm from "@/components/organisms/AuthForm/AuthForm";
import styles from "@/styles/sections/auth/auth.module.scss";

const AuthFormSection = () => {
  return (
    <div className={styles["auth-right"]}>
      <AuthForm />
    </div>
  );
};

export default AuthFormSection;