import { Request, Response } from "express";
import * as lectureService from "./lecture.service";

// ✅ Add Lecture
export const createLecture = async (req: Request, res: Response) => {
  try {
    const {
      courseId,
      title,
      description,
      youtubeVideoId,
      order,
      isFreePreview,
      duration
    } = req.body;

    // 🔥 Validation
    if (!courseId || !title || !youtubeVideoId || order === undefined || duration === undefined) {
      return res.status(400).json({
        message: "Required fields missing",
      });
    }

    const lecture = await lectureService.createLectureService({
      courseId,
      title,
      description,
      youtubeVideoId,
      order,
      duration,
      isFreePreview,
    });

    res.status(201).json({
      message: "Lecture added successfully",
      data: lecture,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Get Lectures of Course
export const getLecturesByCourse = async (req: Request, res: Response) => {
  try {
    const courseId = Array.isArray(req.params.courseId)
      ? req.params.courseId[0]
      : req.params.courseId;
    const lectures = await lectureService.getLecturesByCourseService(
      courseId
    );

    res.json({
      count: lectures.length,
      data: lectures,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};