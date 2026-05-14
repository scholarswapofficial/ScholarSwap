import {User}  from "../../models/user.model";
import { IUser } from "../../models/user.model";

export class StudentService {
  static async updateProfile(id: string, data: Partial<IUser>) {
    const existingUser = await User.findById(id);
    if (!existingUser) {
      throw new Error("Profile not found");
    }

    // ❗ If no data → return existing
    if (!data || Object.keys(data).length === 0) {
      return existingUser;
    }

    // 🔒 Restricted fields (optional but recommended)
    const restrictedFields = ["email", "password", "role"];
    restrictedFields.forEach((field) => delete (data as any)[field]);

    // ✅ Filter valid fields only
    const filteredData: Partial<IUser> = {};

    Object.entries(data).forEach(([key, value]) => {
      if (
        value !== undefined &&
        value !== null &&
        !(typeof value === "string" && value.trim() === "") &&
        !(Array.isArray(value) && value.length === 0)
      ) {
        (filteredData as any)[key] = value;
      }
    });

    // ❗ If after filtering nothing remains
    if (Object.keys(filteredData).length === 0) {
      return existingUser;
    }

    // ✅ Update only valid fields
    Object.assign(existingUser, filteredData);

    await existingUser.save();

    return existingUser;
  }
  // ✅ Delete Profile
  static async deleteProfile(id: string) {
    if(!id) throw new Error("Profile ID is required");
    const deleted = await User.findByIdAndDelete(id);
    if (!deleted) throw new Error("Profile not found");
    return;
  }

  static async getProfile(id: string) {
    const user = await User.findById({_id:id});
    if (!user) throw new Error("Profile not found");
    return user;
  }

  static async getAllProfiles() {
    const users = await User.find();
    return users;
  }

  static async getProfileById(id: string) {
    const user = await User.findById(id);
    if (!user) throw new Error("Profile not found");
    return user;
  }

  static async suspendUser(id: string) {
      const user = await User.findById(id);
      if (!user) throw new Error("Profile not found");
      user.isSuspended = true;
      await user.save();
      return user;
  }
}