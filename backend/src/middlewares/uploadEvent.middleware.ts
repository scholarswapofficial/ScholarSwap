

const multer = require("multer");

const storage = multer.memoryStorage(); // better for cloud upload

export const upload = multer({
  storage,
  limits: {
    fileSize: 2 * 1024 * 1024, // 2MB
  },
});