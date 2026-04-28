import Image from "next/image";

const CourseHero = () => {
  return (
    <div className="course__hero">
      {/* Left Content */}
      <div className="course__hero-content">
        <h1>
          Learn Skills.
          <br />
          Get Certified.
        </h1>

        <p>
          Explore curated courses, master real-world skills, and earn
          certificates to showcase your expertise.
        </p>

        <div className="course__hero-actions">
          <button className="primary-btn">Explore Courses</button>
          <button className="secondary-btn">My Learning</button>
        </div>
      </div>

      {/* Right Image */}
      <div className="course__hero-image">
        <Image
          src="/images/course/courses.png"
          alt="Course Hero"
          width={450}
          height={350}
          priority
        />
      </div>
    </div>
  );
};

export default CourseHero;