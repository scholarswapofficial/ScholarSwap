import mongoose, { Document, Mongoose, Schema } from "mongoose";

export interface ILecture extends Document {
  courseId: mongoose.Types.ObjectId;
  title: string;
  description:string;
  youtubeVideoId: string;
  order: number;
  duration: number; // in minutes (approximate)
  isFreePreview: boolean;
  createdAt: Date;
}

const lectureSchema = new Schema<ILecture>(
  {
    courseId: {
      type: Schema.Types.ObjectId,
      ref: "Course",
      required: true,
      index: true
    },

    title: { type: String, required: true },
    description: { type: String, required: true },

    youtubeVideoId: { 
      type: String, 
      required: true 
    },

    order: { 
      type: Number, 
      required: true 
    },
    duration: { 
      type: Number, 
      required: true 
    },
    isFreePreview: { 
      type: Boolean, 
      default: false 
    }
  },
  {
    timestamps: true,
  }
);

export const Lecture = mongoose.model<ILecture>("Lecture", lectureSchema);