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
  googleId?: string; // For Google users
  avatar?: string; // For Google users
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
});

export const User = mongoose.model<IUser>('User', userSchema);