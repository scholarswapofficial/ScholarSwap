import express from "express";
import { signup, verifyEmail, login, logout } from "../modules/auth/auth.controller";
import { googleLogin } from "../modules/auth/google.controller";
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
router.post("/google-login", googleLogin);


// Logout (handled on frontend by clearing token cookie)
router.post("/logout", logout);

export default router;