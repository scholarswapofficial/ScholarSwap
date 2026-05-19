// FooterSection.tsx

"use client";

import Link from "next/link";
import styles from "@/styles/sections/auth/footer.module.scss";

import { footerData } from "@/constant/footer";

const FooterSection = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer-container"]}>
        {/* LEFT */}
        <div className={styles["footer-brand"]}>
          <h2>{footerData.brand.name}</h2>

          <p>{footerData.brand.description}</p>

          <div className={styles["footer-socials"]}>
            {footerData.socialLinks.map((item, index) => {
              const Icon = item.icon;

              return (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={styles["social-icon"]}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        {/* EXPLORE */}
        <div className={styles["footer-links-group"]}>
          <h3>Explore</h3>

          <div className={styles["footer-links"]}>
            {footerData.exploreLinks.map((item, index) => (
              <Link key={index} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* RESOURCES */}
        <div className={styles["footer-links-group"]}>
          <h3>Resources</h3>

          <div className={styles["footer-links"]}>
            {footerData.resourceLinks.map((item, index) => (
              <Link key={index} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* CONTACT */}
        <div className={styles["footer-contact"]}>
          <h3>{footerData.contact.title}</h3>

          <p>{footerData.contact.subtitle}</p>

          <a href={`mailto:${footerData.contact.email}`}>
            {footerData.contact.email}
          </a>
        </div>
      </div>

      {/* BOTTOM */}
      <div className={styles["footer-bottom"]}>
        <p>
          © {new Date().getFullYear()} ScholarSwap. All rights reserved.
        </p>

        <div className={styles["footer-bottom-links"]}>
          <Link href="/privacy-policy">Privacy Policy</Link>

          <Link href="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;