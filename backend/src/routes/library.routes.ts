// routes/book.routes.ts
import express from "express";
import { createBook, viewBook } from "../modules/library/library.controller";
import { upload } from "../middlewares/upload.middleware";
import authProtect from "../middlewares/auth.middleware";
import adminProtect from "../middlewares/admin.middleware";

const router = express.Router();

router.post("/upload",authProtect,adminProtect ,upload.single("pdf"), createBook);
router.get("/view/:id",authProtect, viewBook);// id of book to view/download
export default router;