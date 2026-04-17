import express from "express";
import { signup, verifyEmail, login } from "../modules/auth/auth.controller.ts";
const router = express.Router();


// =============================
// 🔐 AUTH ROUTES
// =============================

// Register user (send verification email)
router.post("/signup", signup);

// Login user
router.post("/login", login);



// Verify email via link
router.get("/verify-email/:token", verifyEmail);


// =============================
//  GOOGLE AUTH
// =============================

// ✅ Google login/register
// router.post("/google", googleAuth);


// =============================
// 🔒 PROTECTED ROUTE (Example)
// =============================

// router.get("/profile", protectRoute, (req, res) => {
//   res.json({
//     message: "User profile accessed successfully",
//     user: req.user,
//   });
// });

export default router;