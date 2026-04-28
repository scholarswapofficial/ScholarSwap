"use client";

import { useState } from "react";
import { myCoursesData } from "@/constant/courses/myCourses";
import "@/styles/sections/courses/myCourses.scss";

export default function MyCoursesSection() {
  const [activeTab, setActiveTab] = useState("In Progress");

  const filteredCourses = myCoursesData.courses.filter(
    (course) => course.status === activeTab
  );

  return (
    <>
      {/* HEADER */}
      <div className="mycourses-header">
        <h1>My Courses</h1>
        <p>Continue learning and track your progress.</p>
      </div>

      {/* TABS */}
      <div className="mycourses-tabs">
        {myCoursesData.tabs.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* COURSE LIST */}
      <div className="mycourses-list">
        {filteredCourses.map((course) => (
          <div key={course.id} className="mycourse-card">

            {/* IMAGE */}
            <div className="course-thumb">
              <img src={course.image} alt={course.title} />
            </div>

            {/* DETAILS */}
            <div className="course-info">
              <span className="status">In Progress</span>

              <h3>{course.title}</h3>
              <p>
                {course.author} • {course.level}
              </p>

              {/* PROGRESS BAR */}
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${course.progress}%` }}
                />
              </div>

              <p className="progress-text">
                {course.lessonsCompleted} of {course.totalLessons} lessons completed
              </p>
            </div>

            {/* ACTION */}
            <div className="course-action">
              <p>Last accessed</p>
              <span>{course.lastAccessed}</span>

              <button>Continue Learning</button>
            </div>

          </div>
        ))}
      </div>
    </>
  );
}