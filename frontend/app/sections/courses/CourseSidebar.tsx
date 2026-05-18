"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";

import { COURSE_SIDEBAR } from "@/constant/courses";

import {
  FiBookOpen,
  FiAward,
  FiX,
} from "react-icons/fi";

type CourseSidebarProps = {
  mobileOpen: boolean;

  setMobileOpen: (
    value: boolean
  ) => void;
};

const CourseSidebar = ({
  mobileOpen,
  setMobileOpen,
}: CourseSidebarProps) => {
  const pathname = usePathname();

  return (
    <>
      {/* MOBILE OVERLAY */}
      {mobileOpen && (
        <div
          className="course__sidebar-overlay"
          onClick={() =>
            setMobileOpen(false)
          }
        />
      )}

      <aside
        className={`course__sidebar ${
          mobileOpen
            ? "mobile-open"
            : ""
        }`}
      >
        {/* HEADER */}
        <div className="course__sidebar-header">
          {/* LEFT */}
          <div className="course__sidebar-header-left">
            <div className="header-icon">
              <FiBookOpen />
            </div>

            <div>
              <h2>Courses</h2>

              <p>
                Learn & Get Certified
              </p>
            </div>
          </div>

          {/* MOBILE CLOSE */}
          <button
            className="course__sidebar-close"
            onClick={() =>
              setMobileOpen(false)
            }
          >
            <FiX />
          </button>
        </div>

        {/* MENU */}
        <div className="course__sidebar-menu">
          {COURSE_SIDEBAR.map(
            (item) => {
              const Icon =
                item.icon;

              const isActive =
                pathname ===
                  item.href ||
                (item.href !==
                  "/course" &&
                  pathname.startsWith(
                    item.href + "/"
                  ));

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`course__sidebar-item ${
                    isActive
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setMobileOpen(
                      false
                    )
                  }
                >
                  <div className="item-icon">
                    <Icon />
                  </div>

                  <span>
                    {item.label}
                  </span>
                </Link>
              );
            }
          )}
        </div>

        {/* CTA */}
        <div className="course__sidebar-cta">
          <div className="cta-icon">
            <FiAward />
          </div>

          <div>
            <h4>
              Keep Learning!
            </h4>

            <p>
              Complete more
              courses to earn new
              certificates.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default CourseSidebar;