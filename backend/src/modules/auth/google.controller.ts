import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { verifyGoogleToken } from "../../utils/googleAuth";
import { User } from "../../models/user.model";
import {env} from "../../config/env";

export const googleLogin = async (req: Request, res: Response) => {
  try {
    const { token } = req.body;
    // console.log("Received Google token:", token);
    const payload = await verifyGoogleToken(token);
    // console.log("Google token payload:", payload);

    if (!payload) {
      return res.status(400).json({ message: "Invalid token" });
    }

    const { email, name, picture, email_verified, sub } = payload;

    if (!email_verified) {
      return res.status(400).json({ message: "Email not verified" });
    }

    let user = await User.findOne({ email });
    if (user && user.isSuspended === true) {
      return res.status(400).json({ message: "Your account has been suspended. Please contact support." });
    }

    if (!user) {
      user = await User.create({
        email,
        name,
        avatar: picture,
        provider: "google",
        isVerified: true,
        password: email,
         googleId: sub,
      });
    }

    const jwtToken = jwt.sign(
      { id: user._id , email: user.email, name: user.name, role: user.role, user_code: user.user_code },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    res.cookie("token", jwtToken, {
    httpOnly: true,          // 🔒 cannot access via JS
    secure: env.NODE_ENV === "production",           // true in production (HTTPS)
    sameSite: env.NODE_ENV === "production"? "none":"lax",         // CSRF protection
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });


    res.json({ user, token: jwtToken });
  } catch (error) {
    res.status(500).json({ message: "Google login failed" });
  }
};