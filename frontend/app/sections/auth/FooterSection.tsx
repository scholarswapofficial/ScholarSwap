import styles from "@/styles/sections/auth/auth.module.scss";

const FooterSection = () => {
  return (
    <div className={styles["auth-footer"]}>
      <p>
        © {new Date().getFullYear()} ScholarSwap ·{" "}
        <span className={styles["footer-link"]}>Privacy Policy</span> ·{" "}
        <span className={styles["footer-link"]}>Terms</span>
      </p>
    </div>
  );
};

export default FooterSection;