import mongoose, { Document, Schema } from "mongoose";

export interface IPost extends Document {
     author: mongoose.Types.ObjectId;
     title: string;
     content: string;
     // images: string[];
     tags: string[];
     likesCount: number;
     commentsCount: number;
     createdAt: Date;
}


const PostSchema = new Schema<IPost>({
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },

  title: { type: String },
  content: { type: String, required: true }, // markdown or plain text

//   images: [{ type: String }], // cloudinary URLs// future functionality: image metadata (e.g., alt text)

  tags: [{ type: String }],

  likesCount: { type: Number, default: 0 },
  commentsCount: { type: Number, default: 0 },

  createdAt: { type: Date, default: Date.now },
}, { timestamps: true });

export const Post = mongoose.model("Post", PostSchema);