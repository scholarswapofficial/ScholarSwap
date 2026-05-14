import { Request, Response } from "express";
import { StudentService } from "./profile.service";


export class StudentController {
  // ✅ Update Profile
  static async updateProfile(req: Request, res: Response) {
    try {
      const authReq = req as Request & { user: { id: string } };

      const updatedUser = await StudentService.updateProfile(
        authReq.user.id,
        req.body
      );

      res.json({
        success: true,
        data: updatedUser,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  // ✅ Get Profile
  // Admin can get any profile, user can get own profile
  static async getProfileById(req: Request, res: Response) {
    try {
      const userIdParam = req.params.id; // Admin can specify ID, user gets own profile
      const userId = Array.isArray(userIdParam) ? userIdParam[0] : userIdParam;
      const user = await StudentService.getProfile(userId);
      res.json({
        success: true,
        data: user,
      });
    } catch (error: any) {
      res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  }


  // ✅ Get All Profiles (Admin only)
  static async getAllProfile(req: Request, res: Response) {
    try {
      const users = await StudentService.getAllProfiles();
      res.json({
        success: true,
        data: users,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async deleteProfile(req: Request, res: Response) {
    try {
      const userIdParam = req.params.id; // Admin can specify ID    
      const userId = Array.isArray(userIdParam) ? userIdParam[0] : userIdParam;
      await StudentService.deleteProfile(userId);
      res.json({
        success: true,
        message: "Profile deleted successfully",
      });
    } catch (error: any) {
      res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  }
  

  static async suspendUser(req: Request, res: Response) {
    try {
      const userIdParam = req.params.id; // Admin can specify ID  
    const userId = Array.isArray(userIdParam) ? userIdParam[0] : userIdParam;
      const user = await StudentService.suspendUser(userId);
      res.json({
        success: true,
        data: user,
        message: "User suspended successfully",
      });
    } catch (error: any) {
      res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  }
}