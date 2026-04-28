import Image from "next/image";

type Props = {
  course: any;
};

const CourseCard = ({ course }: Props) => {
  return (
    <div className="course__card">
      {/* Image */}
      <div className="course__card-image">
        <Image
          src={course.image}
          alt={course.title}
          width={300}
          height={180}
        />
      </div>

      {/* Content */}
      <div className="course__card-content">
        <h3>{course.title}</h3>

        <p className="instructor">{course.instructor}</p>

        <div className="meta">
          <span>⭐ {course.rating}</span>
          <span>{course.students} students</span>
        </div>

        <div className="footer">
          <span className="price">{course.price}</span>
          <button className="enroll-btn">Enroll</button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;