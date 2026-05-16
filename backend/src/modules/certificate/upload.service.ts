import cloudinary from "../../config/cloudinary";

export const uploadBufferToCloudinary = (buffer: Buffer) => {
  return new Promise<string>((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        resource_type: "raw",
        folder: "certificates",
        format: "pdf",
      },
      (error, result) => {
        if (error) return reject(error);
        resolve(result!.secure_url);
      }
    );

    stream.end(buffer);
  });
};