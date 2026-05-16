import { Request, Response } from "express";
import { markLectureWatched } from "./progress.service";

export const updateProgress = async (req: any, res: Response) => {
  try {
    const { lectureId, courseId } = req.body;

    const userId = req.user.id;
    const userName = req.user.name;

    const progress = await markLectureWatched(
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