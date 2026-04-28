"use client";

import { usePathname } from "next/navigation";
import { COURSE_SIDEBAR } from "@/constant/courses";

const CourseSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="course__sidebar">
      {/* Header */}
      <div className="course__sidebar-header">
        <h2>Courses</h2>
        <p>Learn & Get Certified</p>
      </div>

      {/* Menu */}
      <div className="course__sidebar-menu">
        {COURSE_SIDEBAR.map((item) => {
          const Icon = item.icon;
          const isActive =
            pathname === item.href ||
            (item.href === "/courses" && pathname === "/courses");

          return (
            <a
              key={item.id}
              href={item.href}
              className={`course__sidebar-item ${
                isActive ? "active" : ""
              }`}
            >
              <Icon className="icon" />
              <span>{item.label}</span>
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default CourseSidebar;