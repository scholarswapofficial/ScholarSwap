// routes/event.routes.ts

import express from "express";
import  * as eventController  from "../modules/event/event.controller";
import adminProtect  from "../middlewares/admin.middleware";
import authProtect from "../middlewares/auth.middleware";
import { upload } from "../middlewares/uploadEvent.middleware";
const router = express.Router();


// Admin route to create a new event
router.post("/create-event/admin",authProtect,adminProtect, eventController.createEvent);

// Admin route to update event details (including poster image)
router.put(
  "/:eventId",
  upload.single("posterImage"), 
  eventController.updateEventDetails
);

// Example: GET /?status=APPROVED&page=2&limit=5
router.get("/", authProtect, eventController.getEventsByStatus);

// Admin route to update event status (APPROVED/REJECTED)
router.patch("/status-update/:eventId/admin", authProtect,adminProtect, eventController.updateEventStatus);


// Admin route to delete an event
router.delete("/delete-event/:eventId/admin", authProtect,adminProtect, eventController.deleteEvent);

// 
router.get("/:eventId", eventController.getEventById);
router.get("/redirect/:eventId", eventController. redirectToEvent);

export default router;  