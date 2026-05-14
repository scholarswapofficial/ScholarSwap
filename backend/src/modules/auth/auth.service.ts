import bcrypt from 'bcryptjs';
import { User } from '../../models/user.model';
// import { generateToken } from '../../utils/jwt';
import jwt from "jsonwebtoken";
import console from 'node:console';


export const signupService = async (data: any) => {
  const { name, email, password, college } = data;
  // console.log("Signup data:", data);

  if ( !email || !password) {
    throw new Error("Name, email and password are required");
  }

  // return {name, email, password, college};

  const existing = await User.findOne({ email });
  if (existing) {
  if (!existing.isVerified) {
    //  Delete old unverified user
    await User.deleteOne({ email });
  } else {
    throw new Error("User already exists");
    }
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const token = jwt.sign(
    { email },
    process.env.EMAIL_VERIFY_SECRET!,
    { expiresIn: "10m" }
  );

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    college,
    verificationToken: token,
    verificationTokenExpiry: Date.now() + 10 * 60 * 1000,
  });

  return { user, token };
};

export const verifyEmailService = async (token: string) => {
  try {
    const decoded: any = jwt.verify(token, process.env.EMAIL_VERIFY_SECRET!);
    // console.log("Decoded token:", decoded); // Debug log

    const user = await User.findOne({
      email: decoded.email,
      verificationToken: token,
    });

    if (!user) throw new Error("Invalid token");

    // ❗ Check expiry
    if (user.verificationTokenExpiry! < new Date()) {
      // ✅ DELETE USER if expired
      await User.deleteOne({ _id: user._id });
      throw new Error("Token expired, please signup again");
    }

    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpiry = undefined;

    await user.save();

    return user;

  } catch (err) {
    throw new Error("Invalid or expired token");
  }
};




export const loginService = async (email: string, password: string) => {
  const user = await User.findOne({ email });

  if (!user || !user.password) {
    throw new Error("Invalid credentials");
  }

  if (!user.isVerified) {
    throw new Error("Please verify your email first");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Wrong password");
  }
  if(user.isSuspended===true)
    {
      return res.status(400).json({message: "Your account has been suspended. Please contact support."});
    }
  const token = jwt.sign(
    { id: user._id, email: user.email, name: user.name, role: user.role,user_code: user.user_code },
    process.env.JWT_SECRET!,
    { expiresIn: "7d" }
  );

  return { user, token };
};