import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { verifyGoogleToken } from "../../utils/googleAuth";
import { User } from "../../models/user.model";

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
      { id: user._id },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    res.json({ user, token: jwtToken });
  } catch (error) {
    res.status(500).json({ message: "Google login failed" });
  }
};