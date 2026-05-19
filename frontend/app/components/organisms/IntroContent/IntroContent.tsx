import Logo from "@/components/atoms/Logo/Logo";
import {  CheckCircle,  GraduationCap,} from "lucide-react";
import { INTRO_TEXT } from "@/constant/introText";
import styles from "@/styles/sections/auth/intro.module.scss";

const IntroContent = () => {
  return (
    <div className={styles["intro-content"]}>
      <div className={styles["intro-badge"]}>
        <GraduationCap size={16} />
        <span>{INTRO_TEXT.badge}</span>
      </div>

      <div className={styles["intro-heading-wrapper"]}>
        <h1 className={styles["intro-heading"]}>
          <div className={styles["heading-row"]}>
            <span>
              {INTRO_TEXT.heading.first}
            </span>
            <span>
              {INTRO_TEXT.heading.second}
            </span>
          </div>

          <div className={styles["heading-row"]}>
            <span className={  styles["highlight-text"]}>
              {INTRO_TEXT.heading.highlight}
            </span>
            <span>
              {INTRO_TEXT.heading.last}
            </span>
          </div>
        </h1>
      </div>

      <p className={styles["intro-subheading"]}>
        {INTRO_TEXT.subheading}
      </p>

      <div className={styles["intro-features-grid"]}>
        {INTRO_TEXT.features.map(
          (item, index) => (
            <div key={index}
              className={   styles["feature-card"]}>
              <CheckCircle
                className={  styles["tick-icon"]}
              />

              <span>{item}</span>
            </div>
          )
        )}
      </div>

      <div className={styles["intro-stats"]}>
        {INTRO_TEXT.stats.map(
          (item, index) => (
            <div  key={index}
              className={  styles["stat-card"]}>
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          )
        )}
      </div>

      <div className={styles["intro-trust"]}>
          <div className={styles["avatar-group"]}>
          <div  className={styles["avatar"]}></div>
          <div   className={styles["avatar"]}></div>
          <div   className={styles["avatar"]}></div>
          <div   className={styles["avatar"]}></div>
        </div>

        <p>{INTRO_TEXT.trustText}</p>
      </div>
    </div>
  );
};

export default IntroContent;