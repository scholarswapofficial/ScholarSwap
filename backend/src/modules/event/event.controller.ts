// controllers/event.controller.ts

import { Request, Response } from "express";
// Minimal Multer File type to avoid needing @types/multer in this project
type MulterFile = {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  destination?: string;
  filename?: string;
  path?: string;
  buffer: Buffer;
};
import * as eventService from "./event.service";

import {Event} from "../../models/event.model";

interface AuthRequest extends Request {
  user?: { id: string };
  file?: MulterFile;
}

export const createEvent = async (req: AuthRequest, res: Response) => {
  try {
    const adminId = req.user?.id; // coming from auth middleware

    if (!adminId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const { title } = req.body;

    if (!title) {
      return res.status(400).json({
        success: false,
        message: "Title is required",
      });
    }

    const event = await eventService.createEvent({
      title,
      adminId,
    });

    return res.status(201).json({
      success: true,
      message: "Event created successfully",
      data: {
        eventId: event._id,
        slug: event.slug,
        status: event.status,
      },
    });
  } catch (error) {
    console.error("Create Event Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};


export const updateEventDetails = async (req: AuthRequest, res: Response) => {
  try {
    const { eventId } = req.params as { eventId: string };
    const userId = req.user?.id || null;

    const file = req.file; // posterImage file

 // controller

      if (file) {
        if (!file.mimetype.startsWith("image/")) {
          delete (file as any).buffer;

          return res.status(400).json({
            success: false,
            message: "Only image files allowed",
          });
        }
      }

    const updatedEvent = await eventService.updateEventDetails({
      eventId,
      data: req.body,
      file,
      userId,
    });

    return res.status(200).json({
      success: true,
      message: "Event submitted for approval",
      data: updatedEvent,
    });
  } catch (error: any) {
    console.error(error);

    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Internal Error",
    });
  }
};


export const getEventsByStatus = async (req: Request, res: Response) => {
  try {
    const { status, page = "1", limit = "10" } = req.query;

    const result = await eventService.getEventsByStatus({
      status: status as string,
      page: parseInt(page as string),
      limit: parseInt(limit as string),
    });

    return res.status(200).json({
      success: true,
      message: "Events fetched successfully",
      data: result,
    });
  } catch (error: any) {
    console.error(error);

    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

export const updateEventStatus = async (req: AuthRequest, res: Response) => {
  try {
    const { eventId } = req.params as { eventId: string };
    const adminId = req.user?.id;

    const { status, rejectionReason } = req.body;

    if (!adminId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const result = await eventService.updateEventStatus({
      eventId,
      status,
      adminId,
      rejectionReason,
    });

    return res.status(200).json({
      success: true,
      message: `Event ${status} successfully`,
      data: result,
    });
  } catch (error: any) {
    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};


export const deleteEvent = async (req: Request, res: Response) => {
  try {
    const { eventId } = req.params as { eventId: string };

    const result = await eventService.deleteEvent(eventId);

    return res.status(200).json({
      success: true,
      message: "Event deleted successfully",
      data: result,
    });
  } catch (error: any) {
    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};


export const getEventById = async (req:Request, res:Response) => {
  try {
    const { eventId } = req.params;

    const event = await Event.findByIdAndUpdate(
      eventId,
      { $inc: { views: 1 } }, // 🔥 increment view
      { returnDocument: "after" }
    );

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json({ success: true, data: event });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// GET /api/event/redirect/:id
export const redirectToEvent = async (req:Request, res:Response) => {
  try {
    const { eventId } = req.params;

    const event = await Event.findByIdAndUpdate(
      eventId,
      { $inc: { clicks: 1 } }, // 🔥 increment click
      { returnDocument: "after" }
    );

    if (!event || !event.redirectUrl) {
      return res.status(404).json({ message: "Invalid event" });
    }

    // 🔥 redirect user
    return res.redirect(event.redirectUrl);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};