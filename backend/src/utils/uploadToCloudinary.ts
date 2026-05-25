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

// 
//for  storing event poster images in a separate events folder for better organization
export const uploadEventImgToCloudinary = async (fileBuffer: Buffer, publicId: string) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({
         folder: "events",
         public_id: publicId,  // 🔥 IMPORTANT
          overwrite: true,      // 🔥 replaces image },
          invalidate: true,
      }, 
       (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
    )
      .end(fileBuffer);
  });
};