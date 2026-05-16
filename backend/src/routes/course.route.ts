import express from "express";
import * as courseController from "../modules/course/course.controller";
import authProtect from "../middlewares/auth.middleware";
import adminProtect from "../middlewares/admin.middleware";
import { test } from "node:test";

const router = express.Router();

// ✅ Create Course
router.post("/",authProtect,adminProtect,courseController.createCourse);

// ✅ Get Courses
router.get("/",authProtect, courseController.getCourses);

// ✅ Get Single Course
router.get("/:id",authProtect,courseController.getCourseById);


//not tested yet
// Get Certificate by course ID  
router.get("/:courseId/certificate",authProtect, courseController.getCertificateByCourse);

export default router;