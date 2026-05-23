import mongoose, { Schema } from "mongoose";


export interface IComment extends Document{
     user : mongoose.Types.ObjectId;
     post : mongoose.Types.ObjectId;
     content : string;
     parentComment : mongoose.Types.ObjectId | null;
}


const CommentSchema = new Schema<IComment>({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  post: { type: Schema.Types.ObjectId, ref: "Post" },

  content: { type: String, required: true },

  //for future enhancement: if we want to support nested comments (replies), we can have a parentComment field that references another comment. If it's null, it's a top-level comment.
  // parentComment: { type: Schema.Types.ObjectId, ref: "Comment", default: null },

}, { timestamps: true });


export const Comment=mongoose.model("Comment", CommentSchema);