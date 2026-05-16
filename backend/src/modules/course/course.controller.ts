import { Request, Response } from "express";
import * as courseService from "./course.service";
import {fetchPdfBuffer} from "../certificate/certificate.service";

// ✅ Create Course
export const createCourse = async (req: Request, res: Response) => {
  try {
    const { title, description, subject, instructor, thumbnail, price } =
      req.body;

    // 🔥 Basic validation
    if (!title || !description || !subject || !instructor || !thumbnail) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const course = await courseService.createCourseService({
      title,
      description,
      subject,
      instructor,
      thumbnail,
      price,
    });

    res.status(201).json({
      message: "Course created successfully",
      data: course,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Get All Courses
export const getCourses = async (req: Request, res: Response) => {
  try {
    const courses = await courseService.getAllCoursesService();

    res.json({
      count: courses.length,
      data: courses,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Get Single Course
export const getCourseById = async (req: Request, res: Response) => {
  try {
    const course = await courseService.getCourseByIdService(
      Array.isArray(req.params.id) ? req.params.id[0] : req.params.id
    );

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.json(course);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Get Certificate by CourseId (User specific)
export const getCertificateByCourse = async (req: any, res: Response) => {
  try {
    const userId = req.user.id;
    const { courseId } = req.params;

    const url = await courseService.getCertificateByCourseService(
      userId,
      courseId
    );

    const pdfBuffer = await fetchPdfBuffer(url);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "inline; filename=certificate.pdf");

    res.send(pdfBuffer);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};