
import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  value: { type: Number, min: 1, max: 5 }
});

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    author: String,
    fileUrl: { type: String, required: true },
    thumbnail: String,
    price: { type: Number, required: true },
    isFree: { type: Boolean, required: true },
    college: { type: String, required: true },
    department: { type: String, required: true },
    semester: { type: Number, required: true },
    subject: { type: String, required: true },
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    downloads: { type: Number, default: 0 },
    ratings: [ratingSchema],
    tags: [String],
  },
  { timestamps: true }
);

export default mongoose.model("Book", bookSchema);