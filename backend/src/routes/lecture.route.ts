import express from "express";
import * as lectureController from "../modules/lecture/lecture.controller";

const router = express.Router();

// ✅ Add Lecture (individual upload)
router.post("/", lectureController.createLecture);

// ✅ Get lectures by course
router.get("/:courseId", lectureController.getLecturesByCourse);

export default router;