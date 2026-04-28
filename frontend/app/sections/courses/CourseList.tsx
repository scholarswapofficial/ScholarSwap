import { COURSES } from "@/constant/courses";
import CourseCard from "./CourseCard";

const CourseList = () => {
  return (
    <div className="course__list">
      {COURSES.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseList;