"use client";

import {
  FiMenu,
  FiBell,
} from "react-icons/fi";

import styles from "@/styles/sections/home/mobile-header.module.scss";

type MobileHeaderProps = {
  setMobileOpen: (
    val: boolean
  ) => void;
};

const MobileHeader = ({
  setMobileOpen,
}: MobileHeaderProps) => {
  return (
    <header
      className={styles["mobile-header"]}
    >
      {/* LEFT */}
      <div
        className={
          styles["mobile-header__left"]
        }
      >
        {/* MENU */}
        <button
          className={
            styles[
              "mobile-header__menu-btn"
            ]
          }
          onClick={() =>
            setMobileOpen(true)
          }
        >
          <FiMenu />
        </button>

        {/* BRAND */}
        <div
          className={
            styles[
              "mobile-header__brand"
            ]
          }
        >
          <div
            className={
              styles[
                "mobile-header__logo"
              ]
            }
          >
            S
          </div>

          <div
            className={
              styles[
                "mobile-header__text"
              ]
            }
          >
            <h3>ScholarSwap</h3>

            <span>
              Learn. Share. Grow.
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div
        className={
          styles["mobile-header__right"]
        }
      >
        {/* NOTIFICATION */}
        <button
          className={
            styles[
              "mobile-header__icon-btn"
            ]
          }
        >
          <FiBell />
        </button>

        {/* PROFILE */}
        <img
          src="https://i.pravatar.cc/100"
          alt="profile"
          className={
            styles[
              "mobile-header__profile"
            ]
          }
        />
      </div>
    </header>
  );
};

export default MobileHeader;