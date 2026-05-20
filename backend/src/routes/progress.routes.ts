import express from "express";
import  * as controller  from "../modules/progess/progress.controller";
import  authProtect  from "../middlewares/auth.middleware";
import adminProtect from "../middlewares/admin.middleware";

const router = express.Router();


// not tested yet
// ✅ Update Progress
router.post("/", authProtect, controller.updateProgress);
// not tested yet
// ✅ Get Course Progress
router.get("/:courseId", authProtect, controller.getCourseProgress);

// not tested yet
// ✅ Get Overall Progress (for admin only)
router.get("/overview", authProtect,adminProtect ,controller.getOverallProgress);

export default router;