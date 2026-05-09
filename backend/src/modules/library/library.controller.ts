import { Request, Response } from "express";
import { uploadPdfToCloudinary } from "../../utils/uploadToCloudinary";
import { createBookService, getBookForView } from "./library.service";

type CreateBookRequest = Request & {
  file?: {
    mimetype: string;
    buffer: Buffer;
  };
  user?: {
    id?: string;
  };
};

export const createBook = async (req: CreateBookRequest, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "PDF file is required" });
    }

    if (req.file.mimetype !== "application/pdf") {
      return res.status(400).json({ message: "Only PDF allowed" });
    }

    const result: any = await uploadPdfToCloudinary(req.file.buffer);

    const bookData = {
      title: req.body.title,
      description: req.body.description,
      author: req.body.author,
      fileUrl: result.secure_url,
      thumbnail: req.body.thumbnail || "",
      price: Number(req.body.price),
      isFree: Number(req.body.price) === 0,
      college: req.body.college,
      department: req.body.department,
      semester: Number(req.body.semester),
      subject: req.body.subject,
      uploadedBy: req.user?.id,
    };

    const book = await createBookService(bookData);

    res.status(201).json({
      message: "Book uploaded successfully",
      data: book,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Upload failed",
      error: error.message,
    });
  }
};

type ViewBookRequest = Request & {
  user?: {
    id?: string;
  };
};

export const viewBook = async (req: ViewBookRequest, res: Response) => {
  try {
    const bookId = Array.isArray(req.params.id)
      ? req.params.id[0]
      : req.params.id;

    const userId = req.user?.id;

    if (!bookId) {
      return res.status(400).json({ message: "Book ID is required" });
    }

    const pdfBuffer = await getBookForView(bookId, userId || "");

    // 🔥 HTTP caching headers
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "inline");

    // 🔐 private cache (important for protected content)
    res.setHeader(
      "Cache-Control",
      "private, max-age=3600, must-revalidate"
    );

    res.send(pdfBuffer);
  } catch (error: any) {
    if (error.message === "BOOK_NOT_FOUND") {
      return res.status(404).json({ message: "Book not found" });
    }

    if (error.message === "ACCESS_DENIED") {
      return res.status(403).json({ message: "Not allowed" });
    }

    if (error.message === "FILE_FETCH_FAILED") {
      return res.status(500).json({ message: "Failed to fetch file" });
    }

    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};