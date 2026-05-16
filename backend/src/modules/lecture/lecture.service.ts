import { Lecture } from "../../models/lecture.model";
import { Course } from "../../models/course.model";

export const createLectureService = async (data: any) => {
  // 🔥 Check if course exists
  const course = await Course.findById(data.courseId);
  if (!course) {
    throw new Error("Course not found");
  }

  // 🔥 Check duplicate order
  const existing = await Lecture.findOne({
    courseId: data.courseId,
    order: data.order,
  });

  if (existing) {
    throw new Error("Lecture order already exists");
  }

  const lecture = await Lecture.create(data);

  // 🔥 Increment lecture count
  await Course.findByIdAndUpdate(data.courseId, {
    $inc: { totalLectures: 1 },
  });

  return lecture;
};

export const getLecturesByCourseService = async (courseId: string) => {
  return await Lecture.find({ courseId }).sort({ order: 1 });
};