import express from "express";
import { StudentController } from "../modules/profile/profile.controller";
import authProtect from "../middlewares/auth.middleware";
import adminProtect from "../middlewares/admin.middleware";
const router = express.Router();


// Update Profile
router.put("/update-profile", authProtect, StudentController.updateProfile);
// get profile by id (admin only) 
router.get("/get-profile/:id", authProtect, adminProtect,StudentController.getProfileById);
// get all profile (admin only)
router.get("/get-all-profile", authProtect, adminProtect,StudentController.getAllProfile);
// delete profile (admin only)
router.delete("/delete-profile/:id", authProtect, adminProtect, StudentController.deleteProfile);









export default router;