// routes/book.routes.ts
import express from "express";
import { createBook, viewBook,getAllBooks, getBookById, updateBook, deleteBook } from "../modules/library/library.controller";
import { upload } from "../middlewares/upload.middleware";
import authProtect from "../middlewares/auth.middleware";
import adminProtect from "../middlewares/admin.middleware";


const router = express.Router();

router.post("/upload",authProtect,adminProtect ,upload.single("pdf"), createBook);
router.get("/view/:id",authProtect, viewBook);// id of book to view/download

router.get("/",authProtect ,getAllBooks);// list all books with pagination and filters

router.get("/:id",authProtect, getBookById);// get book details by id

router.patch("/:id",authProtect,adminProtect ,updateBook);// update book details (admin only)

router.delete("/:id",authProtect,adminProtect, deleteBook);// delete book (admin only)
export default router;