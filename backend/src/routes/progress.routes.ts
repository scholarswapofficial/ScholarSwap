import express from "express";
import { updateProgress } from "../modules/progess/progress.controller";
import  authProtect  from "../middlewares/auth.middleware";

const router = express.Router();


// not tested yet
// ✅ Update Progress
router.post("/", authProtect, updateProgress);

export default router;