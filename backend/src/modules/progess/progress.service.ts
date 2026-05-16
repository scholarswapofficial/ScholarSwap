import { Progress } from "../../models/progress.model";
import { Lecture } from "../../models/lecture.model";
import { Course } from "../../models/course.model";
import { Certificate } from "../../models/certificate.model";

import { generateCertificateBuffer } from "../../modules/certificate/certificate.service";
import { uploadBufferToCloudinary } from "../../modules/certificate/upload.service";

import {env} from "../../config/env"; 

export const markLectureWatched = async (
  userId: string,
  courseId: string,
  lectureId: string,
  userName: string
) => {
  // 🔍 Find existing progress
  let progress = await Progress.findOne({ userId, courseId });

  if (!progress) {
    progress = await Progress.create({
      userId,
      courseId,
      watchedLectures: [],
    });
  }

  // ✅ Avoid duplicate lecture tracking
  if (!progress.watchedLectures.includes(lectureId as any)) {
    progress.watchedLectures.push(lectureId as any);
  }

  // 📊 Calculate progress
  const totalLectures = await Lecture.countDocuments({ courseId });

  progress.completionPercentage =
    (progress.watchedLectures.length / totalLectures) * 100;

  // 🎯 Check completion (>= 80%)
  if (progress.completionPercentage >= 80 && !progress.isCompleted) {
    progress.isCompleted = true;

    // 📘 Get course details
    const course = await Course.findById(courseId);
    if (!course) throw new Error("Course not found");

    // 🧾 Step 1: Create certificate document (DB first)
    const certificate = await Certificate.create({
      userId,
      courseId,
      userName,
      courseName: course.title,
    });

    // 🌐 Step 2: Public URL (used in QR)
    const publicUrl = `${env.FRONTEND_URL}/certificate/${certificate._id}`;

    // 📄 Step 3: Generate PDF buffer (NO file system)
    const pdfBuffer = await generateCertificateBuffer(
      userName,
      course.title,
      certificate._id.toString(),
      publicUrl
    );

    // ☁️ Step 4: Upload buffer to Cloudinary
    const certificateUrl = await uploadBufferToCloudinary(pdfBuffer);

    // 💾 Step 5: Save URL in DB
    certificate.certificateUrl = certificateUrl;
    await certificate.save();
  }

  // 💾 Save progress
  await progress.save();

  return progress;
};