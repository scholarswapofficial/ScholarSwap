import mongoose, { Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: "user" | "admin";
  college: string;
  collegeType: string;
  department: string;
  currentYear: string;
  stream: string;
  description: string;
  portfolio: string;
  isVerified?: boolean;
  verificationToken?: string;
  verificationTokenExpiry?: Date;
  googleId?: string;
  avatar?: string;
  provider: "google" | "local";
  skills: string[];
  linkedin: string;
  github: string;
  phone: string;
  location: string;
  isPublic: boolean;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    name: { type: String, required: true },

    email: { type: String, required: true, unique: true },

    password: { type: String, required: true },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    college: { type: String },
    collegeType: { type: String },
    department: { type: String },
    currentYear: { type: String },
    stream: { type: String },

    description: { type: String },
    portfolio: { type: String },

    isVerified: { type: Boolean, default: false },

    verificationToken: { type: String },
    verificationTokenExpiry: { type: Date },

    googleId: { type: String },

    avatar: { type: String },

    provider: {
      type: String,
      enum: ["google", "local"],
      default: "local",
    },

    skills: {
      type: [String],
      default: [],
    },

    linkedin: { type: String },
    github: { type: String },

    phone: { type: String },
    location: { type: String },

    isPublic: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model<IUser>("User", userSchema);