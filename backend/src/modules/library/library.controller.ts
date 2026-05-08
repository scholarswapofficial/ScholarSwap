
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
    // 1. Validate file
    if (!req.file) {
      return res.status(400).json({ message: "PDF file is required" });
    }

    if (req.file.mimetype !== "application/pdf") {
      return res.status(400).json({ message: "Only PDF allowed" });
    }

    // 2. Upload to Cloudinary
    const result: any = await uploadPdfToCloudinary(req.file.buffer);

    // 3. Prepare DB data
    const bookData = {
      title: req.body.title,
      description: req.body.description,
      author: req.body.author,
      fileUrl: result.secure_url, // from Cloudinary
      thumbnail: req.body.thumbnail || "",
      price: Number(req.body.price),
      isFree: Number(req.body.price) === 0,
      college: req.body.college,
      department: req.body.department,
      semester: Number(req.body.semester),
      subject: req.body.subject,
      uploadedBy: req.user?.id, // if auth added
    };

    // 4. Save in MongoDB
    const book = await createBookService(bookData);

    // 5. Response
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
    const bookId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const userId = req.user?.id; // from auth middleware

    if (!bookId) {
      return res.status(400).json({ message: "Book ID is required" });
    }

    const pdfBuffer = await getBookForView(bookId, userId || "");

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "inline");

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