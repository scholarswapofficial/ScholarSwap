import { Request, Response } from "express";
import {
  verifyGoogleToken,
  findOrCreateUser,
  generateAuthToken,
} from "./google.service";

export const googleAuth = async (req: Request, res: Response) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Google token is required",
      });
    }

    // ✅ Verify token with Google
    const payload = await verifyGoogleToken(token);

    // ✅ Find or create user
    const user = await findOrCreateUser(payload);

    // ✅ Generate JWT
    const jwtToken = generateAuthToken(user);

    return res.status(200).json({
      success: true,
      message: "Google authentication successful",
      token: jwtToken,
      user,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Google authentication failed",
    });
  }
};