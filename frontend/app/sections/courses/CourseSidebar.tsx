"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { COURSE_SIDEBAR } from "@/constant/courses";
import { FiBookOpen, FiAward } from "react-icons/fi";

const CourseSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="course__sidebar">

      {/* HEADER */}
      <div className="course__sidebar-header">
        <div className="header-icon">
          <FiBookOpen />
        </div>

        <div>
          <h2>Courses</h2>
          <p>Learn & Get Certified</p>
        </div>
      </div>

      {/* MENU */}
      <div className="course__sidebar-menu">
        {COURSE_SIDEBAR.map((item) => {
          const Icon = item.icon;

          const isActive =
            pathname === item.href ||
            (item.href !== "/course" &&
              pathname.startsWith(item.href + "/"));

          return (
            <Link
              key={item.id}
              href={item.href}
              className={`course__sidebar-item ${
                isActive ? "active" : ""
              }`}
            >
              <div className="item-icon">
                <Icon />
              </div>

              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>

      {/* CTA */}
      <div className="course__sidebar-cta">
        <div className="cta-icon">
          <FiAward />
        </div>

        <div>
          <h4>Keep Learning!</h4>
          <p>Complete more courses to earn new certificates.</p>
        </div>
      </div>

    </aside>
  );
};

export default CourseSidebar;