import mongoose, { Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string; 
  role: 'user' | 'admin';
  college: string;
  isVerified?: boolean;
  verificationToken?: string;
  verificationTokenExpiry?: Date;
  googleId?: string;
  avatar?: string; 
  provider: "google" | "local";
}

const userSchema = new mongoose.Schema<IUser>({
  name: String,
  email: { type: String, unique: true },
  password: { type: String, required: true },
  college:{ type: String },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  isVerified: { type: Boolean, default: false },
  verificationToken: String,
  verificationTokenExpiry: Date,
  googleId: String,
  avatar: String,
  provider: { type: String, enum: ['google', 'local'], default: 'local' },
});

export const User = mongoose.model<IUser>('User', userSchema);