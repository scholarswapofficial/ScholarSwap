import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  college: String,
  department: String,
  semester: Number,
  subject: String
});

export default mongoose.model("Category", categorySchema);