"use client";

import { exploreData } from "@/constant/courses/explore";
import "@/styles/sections/courses/explore.scss";

export default function ExploreSection() {
  return (
    <>
      {/* HEADER */}
      <div className="courses-header">
        <h1>{exploreData.title}</h1>
        <p>{exploreData.subtitle}</p>
      </div>

      {/* FILTER BAR */}
      <div className="courses-filters">
        <input placeholder="Search courses..." className="search-input" />

        <select>
          <option>All Categories</option>
        </select>

        <select>
          <option>All Levels</option>
        </select>

        <select>
          <option>All Prices</option>
        </select>

        <select>
          <option>Sort by: Popularity</option>
        </select>
      </div>

      {/* RESULT COUNT */}
      <p className="result-count">452 Courses found</p>

      {/* GRID */}
      <div className="courses-grid">
        {exploreData.courses.map((course) => (
          <div key={course.id} className="course-card">

            {/* IMAGE */}
            <div className="course-image">
              <img src={course.image} alt={course.title} />

              <span className={`badge ${course.tag.toLowerCase()}`}>
                {course.tag}
              </span>
            </div>

            {/* CONTENT */}
            <div className="course-body">
              <h3>{course.title}</h3>
              <p className="author">{course.author}</p>

              <div className="rating">
                ⭐ {course.rating} ({course.students}) • {course.level}
              </div>
            </div>

            {/* FOOTER */}
            <div className="course-footer">
              <span>⏱ {course.duration}</span>
              <span className="price">₹{course.price}</span>
            </div>

          </div>
        ))}
      </div>
    </>
  );
}