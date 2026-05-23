import mongoose, { Schema, Document } from "mongoose";

export interface IProgress extends Document {
  userId: mongoose.Types.ObjectId;
  courseId: mongoose.Types.ObjectId;
  watchedLectures: mongoose.Types.ObjectId[];
  completionPercentage: number;
  isCompleted: boolean;
}
const progressSchema = new Schema<IProgress>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    courseId: { type: Schema.Types.ObjectId, ref: "Course", required: true },

    watchedLectures: [
      { type: Schema.Types.ObjectId, ref: "Lecture" }
    ],

    completionPercentage: { type: Number, default: 0 },

    isCompleted: { type: Boolean, default: false },

  },
  { timestamps: true }
);

export const Progress = mongoose.model("Progress", progressSchema);