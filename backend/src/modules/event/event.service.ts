// services/event.service.ts

import { Event } from "../../models/event.model";
import slugify from "slugify";
import {uploadEventImgToCloudinary} from "../../utils/uploadToCloudinary";
import mongoose from "mongoose";
import cloudinary from "cloudinary";
interface CreateEventInput {
  title: string;
  adminId: string;
}

export const createEvent = async ({ title, adminId }: CreateEventInput) => {
  // 🔹 Generate slug
  let baseSlug = slugify(title, {
    lower: true,
    strict: true,
  });

  let slug = baseSlug;
  let count = 1;

  // 🔹 Ensure unique slug
  while (await Event.findOne({ slug })) {
    slug = `${baseSlug}-${count}`;
    count++;
  }

  // 🔹 Create event (only base data)
  const event = await Event.create({
    title,
    slug,
    createdBy: adminId,
    createdByRole: "ADMIN",
    status: "DRAFT", // important
  });

  return event;
};


interface UpdateEventInput {
  eventId: string;
  data: any;
  file?: { buffer: Buffer };
  userId?: string | null;
}

export const updateEventDetails = async ({
  eventId,
  data,
  file,
  userId,
}: UpdateEventInput) => {
  // 🔹 Validate ID
  if (!mongoose.Types.ObjectId.isValid(eventId)) {
    throw { statusCode: 400, message: "Invalid event ID" };
  }

  const event = await Event.findById(eventId);
  if (!event) {
    throw { statusCode: 404, message: "Event not found" };
  }

  // 🔹 Title + slug update (optimized)
  if (data.title && data.title !== event.title) {
    const baseSlug = slugify(data.title, { lower: true, strict: true });
    const uniqueSuffix = Date.now().toString().slice(-5);

    event.title = data.title;
    event.slug = `${baseSlug}-${uniqueSuffix}`;
  }

  // 🔹 Upload poster image (if file provided)
  if (file) {
    const publicId = `event_${event._id}_poster`;
    const uploadResult: any = await uploadEventImgToCloudinary(file.buffer, publicId);
    event.posterImage = uploadResult.secure_url;
    // 🔥 CRITICAL: remove buffer reference
    delete (file as any).buffer;
  }

  // 🔹 bannerImage → direct URL
  if (data.bannerImage) {
    event.bannerImage = data.bannerImage;
  }

  // 🔹 Deep merge nested objects
  if (data.organizer) {
    event.organizer = { ...event.organizer, ...data.organizer };
  }

  if (data.location) {
    event.location = { ...event.location, ...data.location };
  }

  if(data.redirectUrl) {
    event.redirectUrl = data.redirectUrl;
  }

  if(data.registrationUrl) {
    event.registrationUrl = data.registrationUrl;
  }
  if(data.startDate) {
    event.startDate = data.startDate;
  }
  if(data.endDate) {
    event.endDate = data.endDate;
  }
  if(data.registrationDeadline) {
    event.registrationDeadline = data.registrationDeadline;
  }
  if(data.mode== "ONLINE" || data.mode === "OFFLINE" || data.mode === "HYBRID") {
    event.mode = data.mode;
  }

  if(data.category === "HACKATHON" || data.category === "CODING" || data.category === "WORKSHOP" || data.category === "WEBINAR" || data.category === "OTHER") {
    event.category = data.category;
  }
  if(data.tags) {
    event.tags = data.tags;
  }
  if(data.seoTitle) {
    event.seoTitle = data.seoTitle;
  }
  if(data.seoDescription) {
    event.seoDescription = data.seoDescription;
  }
  

  // 🔹 Allowed fields
  const allowedFields = [
    "title",
    "description",
    "category",
    "registrationUrl",
    "redirectUrl",
    "startDate",
    "endDate",
    "registrationDeadline",
    "mode",
    "tags",
    "seoTitle",
    "seoDescription",
  ];

  allowedFields.forEach((field) => {
    if (data[field] !== undefined) {
      (event as any)[field] = data[field];
    }
  });

  // 🔹 Track updater
  if (userId) {
    event.lastUpdatedBy = new mongoose.Types.ObjectId(userId);
  }

  // 🔹 Always move to pending
  event.status = "PENDING";

  await event.save();

  return {
    _id: event._id,
    title: event.title,
    slug: event.slug,
    status: event.status,
    posterImage: event.posterImage,
    bannerImage: event.bannerImage,
  };
};

interface GetEventsInput {
  status?: string;
  page: number;
  limit: number;
}

export const getEventsByStatus = async ({
  status,
  page,
  limit,
}: GetEventsInput) => {
  const validStatuses = ["DRAFT", "PENDING", "APPROVED", "REJECTED"];

  const filter: any = {};

  // ✅ Apply filter ONLY if status exists
  if (status) {
    if (!validStatuses.includes(status)) {
      throw {
        statusCode: 400,
        message: "Invalid status value",
      };
    }

    filter.status = status;
  }

  const skip = (page - 1) * limit;

  const [events, total] = await Promise.all([
    Event.find(filter)
      .select("_id title slug status posterImage bannerImage mode createdAt")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit),

    Event.countDocuments(filter),
  ]);

  return {
    events,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
  };
};


interface UpdateStatusInput {
  eventId: string;
  status: "APPROVED" | "REJECTED";
  adminId: string;
  rejectionReason?: string;
}

export const updateEventStatus = async ({
  eventId,
  status,
  adminId,
  rejectionReason,
}: UpdateStatusInput) => {
  // 🔹 Validate ID
  if (!mongoose.Types.ObjectId.isValid(eventId)) {
    throw { statusCode: 400, message: "Invalid event ID" };
  }

  // 🔹 Validate status
  const allowedStatuses = ["APPROVED", "REJECTED"];
  if (!allowedStatuses.includes(status)) {
    throw {
      statusCode: 400,
      message: "Status must be APPROVED or REJECTED",
    };
  }

  // 🔹 Reject must have reason
  if (status === "REJECTED" && !rejectionReason) {
    throw {
      statusCode: 400,
      message: "Rejection reason is required",
    };
  }

  // 🔥 Optimized DB update (single query)
  const updateData: any = {
    status,
    approvedBy: adminId,
    approvedAt: new Date(),
    rejectionReason: status === "REJECTED" ? rejectionReason : undefined,
  };

  const event = await Event.findOneAndUpdate(
    { _id: eventId },
    updateData,
    { returnDocument: "after" } 
  ).select("_id title status approvedAt rejectionReason");

  if (!event) {
    throw { statusCode: 404, message: "Event not found" };
  }

  return event;
};


// Additional function to delete event 
export const deleteEvent = async (eventId: string) => {
  // 🔹 Validate ID
  if (!mongoose.Types.ObjectId.isValid(eventId)) {
    throw { statusCode: 400, message: "Invalid event ID" };
  }

  // 🔥 Step 1: Get only required field (lean query)
  const event = await Event.findById(eventId).select("posterImage");

  if (!event) {
    throw { statusCode: 404, message: "Event not found" };
  }

  // 🔹 Step 2: Delete from DB (fast)
  await Event.deleteOne({ _id: eventId });

  // 🔥 Step 3: Delete image from Cloudinary (if exists)
  if (event.posterImage) {
    try {
      // Extract public_id from URL
      const parts = event.posterImage.split("/");
      const fileName = parts[parts.length - 1]; // event_123_poster.jpg
      const publicId = `events/${fileName.split(".")[0]}`;

      await cloudinary.v2.uploader.destroy(publicId);
    } catch (err) {
      console.error("Cloudinary delete failed:", err);
      // ❗ Do NOT fail API if image deletion fails
    }
  }

  return { eventId };
};