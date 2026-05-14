import Book from "../../models/book.model";
import Purchase from "../../models/purchase.model";
import { redisClient} from '../../config/redis';
import mongoose from "mongoose";
import { env } from "../../config/env";

import { v2 as cloudinary } from "cloudinary";
import { getPublicIdFromUrl } from "../../utils/cloudinary";



export const createBookService = async (data: any) => {
  const book = await Book.create(data);
  return book;
};

export const getBookForView = async (bookId: string, userId: string) => {
  // 🔹 Cache key
  const cacheKey = `pdf:${bookId}`;
  
  // 🔹 1. Check Redis
  const cached = await redisClient.get(cacheKey);
  if (cached) {
    console.log("CACHE HIT ✅");
    return Buffer.from(cached, "base64");
  }

  console.log("CACHE MISS ❌");

  // 🔹 2. Find book
  const book = await Book.findById(bookId);
  if (!book) {
    throw new Error("BOOK_NOT_FOUND");
  }

  // 🔹 3. Access control
  if (!book.isFree) {
    const purchase = await Purchase.findOne({
      user: userId,
      book: book._id,
      status: "completed",
    });

    if (!purchase) {
      throw new Error("ACCESS_DENIED");
    }
  }

  // 🔹 4. Fetch from Cloudinary
  const response = await fetch(book.fileUrl);

  if (!response.ok) {
    throw new Error("FILE_FETCH_FAILED");
  }

  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  // 🔹 5. Store in Redis (TTL = 1 hour)
  await redisClient.set(cacheKey, buffer.toString("base64"), {
    EX: env.REDIS_TTL,//2 * 3600, // 2 hours
  });

  return buffer;
};

export const listBooksService = async () => {
  const books = await Book.find().select("-fileUrl");
  return books;
}

interface GetBooksParams {
  college?: string;
  department?: string;
  semester?: number;
  subject?: string;
  isFree?: boolean;
  search?: string;
  page?: number;
  limit?: number;
  tags?: string[];
}


export const getAllBooksService = async (params: GetBooksParams) => {
  const {
    college,
    department,
    semester,
    subject,
    isFree,
    search,
    page = 1,
    limit = 10,
    tags,
  } = params;

  const query: any = {};

  // 🔹 Filters
  if (college) query.college = college;
  if (department) query.department = department;
  if (semester) query.semester = semester;
  if (subject) query.subject = subject;
  if (tags && tags.length > 0) query.tags = { $in: tags };
  if (typeof isFree === "boolean") query.isFree = isFree;

   // 🔹 Search (title + author + tags)
  if (search) {
    query.$or = [
      { title: { $regex: search, $options: "i" } },
      { author: { $regex: search, $options: "i" } },
      { tags: { $regex: search, $options: "i" } },
    ];
  }

  const skip = (page - 1) * limit;

  // 🔹 Fetch data
  const [books, total] = await Promise.all([
    Book.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit),

    Book.countDocuments(query),
  ]);

  return {
    books,
    total,
    page,
    totalPages: Math.ceil(total / limit),
  };
};


export const getBookByIdService = async (bookId: string) => {
  // 🔹 Validate ObjectId
  if (!mongoose.Types.ObjectId.isValid(bookId)) {
    throw new Error("INVALID_ID");
  }

  // 🔹 Fetch book (exclude heavy/sensitive fields if needed)
  const book = await Book.findById(bookId)
    .populate("uploadedBy", "name email") // optional
    .lean();

  if (!book) {
    throw new Error("BOOK_NOT_FOUND");
  }

  // 🔹 Calculate average rating
  const ratings = book.ratings || [];
  const avgRating =
    ratings.length > 0
      ? ratings.reduce((sum, r) => sum + (r?.value ?? 0), 0) / ratings.length
      : 0;

  return {
    ...book,
    avgRating,
    totalRatings: ratings.length,
  };
};

export const updateBookService = async (
  bookId: string,
  updateData: any,
  userId?: string
) => {
  // 🔹 Validate ID
  if (!mongoose.Types.ObjectId.isValid(bookId)) {
    throw new Error("INVALID_ID");
  }

  // 🔹 Find existing book
  const book = await Book.findById(bookId);
  if (!book) {
    throw new Error("BOOK_NOT_FOUND");
  }



  // 🔥 Allowed fields only (IMPORTANT)
  const allowedFields = [
    "title",
    "description",
    "author",
    "price",
    "college",
    "department",
    "semester",
    "subject",
    "thumbnail",
    "tags",
  ];

  const updateFields: any = {};

  for (const key of allowedFields) {
    if (updateData[key] !== undefined) {
      updateFields[key] = updateData[key];
    }
  }

  // 🔹 Auto update isFree if price changes
  if (updateFields.price !== undefined) {
    updateFields.isFree = updateFields.price === 0;
  }

  // 🔹 Update
  const updatedBook = await Book.findByIdAndUpdate(
    bookId,
    { $set: updateFields },
    { new: true, runValidators: true }
  );

  return updatedBook;
};


export const deleteBookService = async (
  bookId: string,
  userId?: string
) => {
  // 🔹 Validate ID
  if (!mongoose.Types.ObjectId.isValid(bookId)) {
    throw new Error("INVALID_ID");
  }

  // 🔹 Find book
  let book: any | null;
  try {
    book = await Book.findById(bookId);
  } catch (err) {
    console.error("BOOK_NOT_FOUND", err);
    throw new Error("BOOK_NOT_FOUND");
  }

  if (!book) {
    throw new Error("BOOK_NOT_FOUND");
  }

  

 

  // 🔹 Extract public_id
  const publicId = getPublicIdFromUrl(book.fileUrl);

  // 🔹 Delete from Cloudinary
  try {
    await cloudinary.uploader.destroy(publicId, {
      resource_type: "raw", // IMPORTANT for PDF
    });
  } catch (err) {
    console.error("Cloudinary error:", err);
    throw new Error("CLOUDINARY_DELETE_FAILED");
  }

  // 🔹 Delete from MongoDB
  await Book.findByIdAndDelete(bookId);

  // 🔥 Optional: cache invalidation
  try {
    await redisClient.del(`book:${bookId}`);
  } catch {}

  return true;
};