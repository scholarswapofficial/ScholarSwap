import { Course } from "../../models/course.model";
import { Certificate } from "../../models/certificate.model";

export const createCourseService = async (data: any) => {
  const course = await Course.create(data);
  return course;
};

export const getAllCoursesService = async () => {
  return await Course.find().sort({ createdAt: -1 });
};

export const getCourseByIdService = async (courseId: string) => {
  return await Course.findById(courseId);
};

export const getCertificateByCourseService = async (
  userId: string,
  courseId: string
) => {
  const cert = await Certificate.findOne({ userId, courseId });

  if (!cert || !cert.certificateUrl) {
    throw new Error("Certificate not found !!! You may not have completed the course or the certificate is not generated yet.");
  }

  return cert.certificateUrl;
};