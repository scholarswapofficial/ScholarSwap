import { Request, Response } from "express";
import { uploadPdfToCloudinary } from "../../utils/uploadToCloudinary";
import { createBookService, deleteBookService, getAllBooksService, getBookByIdService, getBookForView, updateBookService } from "./library.service";
import console from "console";

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
      tags: req.body.tags        ? Array.isArray(req.body.tags)
          ? req.body.tags
          : req.body.tags.split(",").map((tag: string) => tag.trim())
        : [],
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

export const getAllBooks = async (req: Request, res: Response) => {
  try {

    const {
      college,
      department,
      semester,
      subject,
      isFree,
      search,
      page,
      limit,
      tags,
    } = req.query;
    
    const data = await getAllBooksService({
      college: college as string,
      department: department as string,
      semester: semester ? Number(semester) : undefined,
      subject: subject as string,
      isFree:
        isFree !== undefined ? isFree === "true" : undefined,
      search: search as string,
      page: page ? Number(page) : 1,
      limit: limit ? Number(limit) : 10,
      tags: tags
        ? Array.isArray(tags)
          ? (tags as string[])
          : (tags as string).split(",").map((tag) => tag.trim())
        : undefined,
    });

    res.status(200).json({
      success: true,
      message: "Books fetched successfully",
      data,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch books",
      error: error.message,
    });
  }
};

export const getBookById = async (req: Request, res: Response) => {
  try {
    const bookId = Array.isArray(req.params.id)
      ? req.params.id[0]
      : req.params.id;

    if (!bookId) {
      return res.status(400).json({
        success: false,
        message: "Book ID is required",
      });
    }

    const book = await getBookByIdService(bookId);

    res.status(200).json({
      success: true,
      message: "Book fetched successfully",
      data: book,
    });
  } catch (error: any) {
    if (error.message === "INVALID_ID") {
      return res.status(400).json({
        success: false,
        message: "Invalid book ID",
      });
    }

    if (error.message === "BOOK_NOT_FOUND") {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to fetch book",
      error: error.message,
    });
  }
};


type UpdateBookRequest = Request & {
  user?: {
    id?: string;
  };
};

export const updateBook = async (
  req: UpdateBookRequest,
  res: Response
) => {
  try {
    const bookId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const userId = req.user?.id; // from auth middleware

    if (!bookId) {
      return res.status(400).json({
        success: false,
        message: "Book ID is required",
      });
    }

    const updatedBook = await updateBookService(
      bookId,
      req.body,
      userId
    );

    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: updatedBook,
    });
  } catch (error: any) {
    if (error.message === "INVALID_ID") {
      return res.status(400).json({
        success: false,
        message: "Invalid book ID",
      });
    }

    if (error.message === "BOOK_NOT_FOUND") {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    if (error.message === "UNAUTHORIZED") {
      return res.status(403).json({
        success: false,
        message: "You are not allowed to update this book",
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to update book",
      error: error.message,
    });
  }
};


type DeleteBookRequest = Request & {
  user?: { id?: string };
};

export const deleteBook = async (
  req: DeleteBookRequest,
  res: Response
) => {
  try {
    const rawId = req.params.id;
    const bookId = Array.isArray(rawId) ? rawId[0] : rawId;
    const userId = req.user?.id;

    if (!bookId) {
      return res.status(400).json({
        success: false,
        message: "Book ID is required",
      });
    }

    await deleteBookService(bookId as string, userId);

    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
    });
  } catch (error: any) {
    if (error.message === "INVALID_ID") {
      return res.status(400).json({
        success: false,
        message: "Invalid book ID",
      });
    }

    if (error.message === "BOOK_NOT_FOUND") {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    if (error.message === "UNAUTHORIZED") {
      return res.status(403).json({
        success: false,
        message: "You are not allowed",
      });
    }

    if (error.message === "CLOUDINARY_DELETE_FAILED") {
      return res.status(500).json({
        success: false,
        message: "File deletion failed",
      });
    }

    res.status(500).json({
      success: false,
      message: "Delete failed",
      error: error.message,
    });
  }
};