import Logo from "@/components/atoms/Logo/Logo";
import { CheckCircle } from "lucide-react";
import { INTRO_TEXT } from "@/constant/introText";

import styles from "@/styles/sections/auth/auth.module.scss";

const IntroContent = () => {
  return (
    <div className={styles["intro-content"]}>
      <Logo />

      <div className={styles["intro-illustration"]}>
        <img src="/images/auth-illustration.png" alt="learning" />
      </div>

      <h1 className={styles["intro-heading"]}>
        {INTRO_TEXT.heading}
      </h1>

      <p className={styles["intro-subheading"]}>
        {INTRO_TEXT.subheading}
      </p>

      <ul className={styles["intro-features"]}>
        {INTRO_TEXT.features.map((item, index) => (
          <li key={index}>
            <CheckCircle className={styles["tick-icon"]} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IntroContent;