import { Request, Response } from "express";
import * as service  from "./progress.service";

export const updateProgress = async (req: any, res: Response) => {
  try {
    const { lectureId, courseId } = req.body;

    const userId = req.user.id;
    const userName = req.user.name;

    const progress = await  service.markLectureWatched(
      userId,
      courseId,
      lectureId,
      userName
    );

    res.json(progress);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};



// ✅ Course Progress
export const getCourseProgress = async (req: any, res: Response) => {
  try {
    const userId = req.user.id;
    const { courseId } = req.params;

    const data = await service.getCourseProgressService(
      userId,
      courseId
    );

    res.json(data);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Overall Progress
export const getOverallProgress = async (req: any, res: Response) => {
  try {
    const userId = req.user.id;

    const data = await service.getOverallProgressService(userId);

    res.json(data);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};