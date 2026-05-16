import mongoose, { Document, Schema } from "mongoose";

export interface ICourse extends Document {
  title: string;
  description: string;
  subject: string;
  instructor: string; // keep simple for now
  thumbnail: string;
  price: number;
  isPublished: boolean;
  totalLectures: number;
  createdAt: Date;
  updatedAt: Date;
}

const courseSchema = new Schema<ICourse>(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    subject: { 
      type: String, 
      required: true,
      index: true // 🔥 fast filtering
    },

    instructor: { 
      type: String, 
      required: true 
    },

    thumbnail: { type: String, required: true },

    price: { 
      type: Number, 
      default: 0.0 
    },

    isPublished: { 
      type: Boolean, 
      default: false 
    },
    totalLectures: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true,
  }
);

export const Course = mongoose.model<ICourse>("Course", courseSchema);