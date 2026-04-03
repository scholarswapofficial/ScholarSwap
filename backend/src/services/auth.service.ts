import bcrypt from 'bcryptjs';
import { User } from '../models/user.model.js';
import { generateToken } from '../utils/jwt.js';

export const registerUser = async (name: string, email: string, password: string) => {
  const existing = await User.findOne({ email });
  if (existing) throw new Error('User already exists');

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashed,
  });

  const token = generateToken({ id: user._id });

  return { user, token };
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('User not found');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');

  const token = generateToken({ id: user._id });

  return { user, token };
};