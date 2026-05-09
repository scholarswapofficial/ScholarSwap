import Book from "../../models/book.model";
import Purchase from "../../models/purchase.model";
import { createClient } from "redis";

const redis = createClient();
redis.connect();

export const createBookService = async (data: any) => {
  const book = await Book.create(data);
  return book;
};

export const getBookForView = async (bookId: string, userId: string) => {
  // 🔹 Cache key
  const cacheKey = `pdf:${bookId}`;

  // 🔹 1. Check Redis
  const cached = await redis.get(cacheKey);
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
  await redis.set(cacheKey, buffer.toString("base64"), {
    EX: 7200,//2 * 3600, // 2 hours
  });

  return buffer;
};