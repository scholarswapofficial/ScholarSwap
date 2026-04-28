"use client";

import { COURSE_CATEGORIES } from "@/constant/courses";

const CourseRow = () => {
  return (
    <div className="course__category-section">
      
      {/* Header */}
      <div className="category__header">
        <h3>Top Categories</h3>
        <span className="see-all">See all →</span>
      </div>

      {/* Cards */}
      <div className="category__row">
        {COURSE_CATEGORIES.map((cat) => {
          const Icon = cat.icon;

          return (
            <div key={cat.id} className="category__card">
              
              {/* Icon Box with Dynamic Colors */}
              <div
                className="icon-box"
                style={{ background: cat.bg }}
              >
                <Icon style={{ color: cat.color }} />
              </div>

              {/* Content */}
              <div className="content">
                <h4>{cat.title}</h4>
                <p>
                  {cat.count
                    ? `${cat.count} Courses`
                    : "Explore more"}
                </p>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseRow;