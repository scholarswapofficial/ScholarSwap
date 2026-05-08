
// eslint-disable-next-line @typescript-eslint/no-var-requires
const multer = require("multer");
import type { Request } from "express";

type UploadFile = {
  mimetype: string;
};

export const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 100 * 1024 * 1024, // ✅ 100 MB
  },
  fileFilter: (
    req: Request,
    file: UploadFile,
    cb: (error: Error | null, acceptFile?: boolean) => void,
  ) => {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new Error("Only PDF files are allowed"));
    }
  },
});