import Book from "../../models/book.model";
import Purchase from "../../models/purchase.model";

export const createBookService = async (data: any) => {
  const book = await Book.create(data);
  return book;
};

export const getBookForView = async (bookId: string, userId: string) => {
  // 1. Find book
  const book = await Book.findById(bookId);
  if (!book) {
    throw new Error("BOOK_NOT_FOUND");
  }

  // 2. Access control
  if (!book.isFree) {
    const purchase = await Purchase.findOne({
      user: userId,
      book: book._id,
      status: "completed",
    });

    if (!purchase) {
      throw new Error("ACCESS_DENIED !!! You need to purchase this book to view it.");
    }
  }

  // 3. Fetch PDF from Cloudinary
  const response = await fetch(book.fileUrl);

  if (!response.ok) {
    throw new Error("FILE_FETCH_FAILED");
  }

  const arrayBuffer = await response.arrayBuffer();

  return Buffer.from(arrayBuffer);
};

