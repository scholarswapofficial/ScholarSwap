"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import {
  FiMenu,
  FiBell,
  FiChevronRight,
} from "react-icons/fi";

import "@/styles/sections/courses/mobile-header.scss";

type MobileCourseHeaderProps = {
  setMobileOpen: (
    value: boolean
  ) => void;
};

const tabs = [
  {
    label: "Dashboard",
    href: "/course",
  },
  {
    label: "Explore",
    href: "/course/explore",
  },
  {
    label: "My Courses",
    href: "/course/my-courses",
  },
  {
    label: "Certificates",
    href: "/course/certificates",
  },
];

const MobileCourseHeader = ({
  setMobileOpen,
}: MobileCourseHeaderProps) => {
  const pathname = usePathname();

  return (
    <div className="mobile-course-header">
      {/* TOP */}
      <div className="mobile-course-header__top">
        {/* LEFT */}
        <div className="mobile-course-header__left">
          <button
            className="mobile-course-header__menu"
            onClick={() =>
              setMobileOpen(true)
            }
          >
            <FiMenu />
          </button>

          <h2>Courses</h2>
        </div>

        {/* RIGHT */}
        <div className="mobile-course-header__right">
          <button className="mobile-course-header__icon">
            <FiBell />
          </button>

          <div className="mobile-course-header__avatar">
            <img
              src="/images/library/default-avatar.png"
              alt="user"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCourseHeader;