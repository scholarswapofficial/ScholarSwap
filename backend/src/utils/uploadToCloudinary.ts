// utils/uploadToCloudinary.ts
import cloudinary from "../config/cloudinary";

export const uploadPdfToCloudinary = (buffer: Buffer) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      {
        folder: "books",
        resource_type: "raw", // required for PDF
      },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    ).end(buffer);
  });
};