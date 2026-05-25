import mongoose, { Schema, Document } from "mongoose";

export interface IEvent extends Document {
  title: string;
  slug: string;

  // Who created base event
  createdBy: mongoose.Types.ObjectId;
  createdByRole: "ADMIN" | "USER";

  // Event Details (filled via frontend dynamic form)
  description?: string;
  category: "HACKATHON" | "CODING" | "WORKSHOP" | "WEBINAR" | "OTHER";

  organizer: {
    name?: string;
    email?: string;
    website?: string;
  };

  // Links
  registrationUrl?: string;
  redirectUrl?: string; // where user will land (main use case)

  // Timing
  startDate?: Date;
  endDate?: Date;
  registrationDeadline?: Date;

  // Location
  mode: "ONLINE" | "OFFLINE" | "HYBRID";
  location?: {
    address?: string;
    city?: string;
    state?: string;
    country?: string;
  };

  // Media
  posterImage?: string;
  bannerImage?: string;

  // Status & moderation
  status: "DRAFT" | "PENDING" | "APPROVED" | "REJECTED";
  approvedBy?: mongoose.Types.ObjectId;
  approvedAt?: Date;
  rejectionReason?: string;

  // Meta
  tags?: string[];
  isFeatured?: boolean;
  views?: number;
  clicks?: number;

  // SEO / discoverability
  seoTitle?: string;
  seoDescription?: string;

  // Tracking updates
  lastUpdatedBy?: mongoose.Types.ObjectId;

  createdAt: Date;
  updatedAt: Date;
}

const EventSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
    },

    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    createdByRole: {
      type: String,
      enum: ["ADMIN", "USER"],
      default: "ADMIN",
    },

    description: String,

    category: {
      type: String,
      enum: ["HACKATHON", "CODING", "WORKSHOP", "WEBINAR", "OTHER"],
      default: "OTHER",
    },

    organizer: {
      name: String,
      email: String,
      website: String,
    },

    registrationUrl: String,
    redirectUrl: String,

    startDate: Date,
    endDate: Date,
    registrationDeadline: Date,

    mode: {
      type: String,
      enum: ["ONLINE", "OFFLINE", "HYBRID"],
      default: "ONLINE",
    },

    location: {
      address: String,
      city: String,
      state: String,
      country: String,
    },

    posterImage: String,
    bannerImage: String,

    status: {
      type: String,
      enum: ["DRAFT", "PENDING", "APPROVED", "REJECTED"],
      default: "DRAFT",
      index: true,
    },

    approvedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    approvedAt: Date,
    rejectionReason: String,

    tags: [String],

    isFeatured: {
      type: Boolean,
      default: false,
    },

    views: {
      type: Number,
      default: 0,
    },

    clicks: {
      type: Number,
      default: 0,
    },

    seoTitle: String,
    seoDescription: String,

    lastUpdatedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export const Event = mongoose.model<IEvent>("Event", EventSchema);