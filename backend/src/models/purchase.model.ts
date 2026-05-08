// models/purchase.model.ts
import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    book: { type: mongoose.Schema.Types.ObjectId, ref: "Book", required: true },
    amount: { type: Number, required: true },
    paymentId: String,
    status: {
      type: String,
      enum: ["pending", "completed", "failed"],
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Purchase", purchaseSchema);