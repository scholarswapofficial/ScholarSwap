import mongoose, { Schema, Document } from "mongoose";

export interface ICertificate extends Document {
  userId: mongoose.Types.ObjectId;
  courseId: mongoose.Types.ObjectId;
  userName: string;
  courseName: string;
  certificateUrl: string;
  issuedAt: Date;
}

const certificateSchema = new Schema<ICertificate>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    courseId: { type: Schema.Types.ObjectId, ref: "Course", required: true },

    userName: { type: String, required: true },
    courseName: { type: String, required: true },

    certificateUrl: { type: String },

    issuedAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

export const Certificate = mongoose.model<ICertificate>(
  "Certificate",
  certificateSchema
);