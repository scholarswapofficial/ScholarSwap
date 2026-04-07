"use client";

import IntroContent from "@/components/organisms/IntroContent/IntroContent";
import styles from "@/styles/sections/auth/intro.module.scss";

const IntroSection = () => {
  return (
    <div className={styles["intro-section"]}>
      <IntroContent />
    </div>
  );
};

export default IntroSection;