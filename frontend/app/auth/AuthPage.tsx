import IntroSection from "@/sections/auth/IntroSection";
import AuthFormSection from "@/sections/auth/AuthFormSection";
import FooterSection from "@/sections/auth/FooterSection";

import styles from "@/styles/sections/auth/auth.module.scss";

const AuthPage = () => {
  return (
    <div className={styles["auth-container"]}>
      <IntroSection />
      <AuthFormSection />
      <FooterSection />
    </div>
  );
};

export default AuthPage;