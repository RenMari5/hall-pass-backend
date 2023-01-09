import { model, Schema } from "mongoose";
import { SchoolHour } from "../types/hour.types";

// 1. Setup our schema
const hourSchema = new Schema<SchoolHour>(
  {
    userId: { type: String, required: true },
    dateAdded: { type: String, required: true },
    schoolYear: { type: String, required: true },
    schoolHour: { type: String, required: true },
  },
  { timestamps: true }
  // { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } } // Alternative method for setting the createAt and updatedAt field names
);

// 2. Create the modal from the Schema
export const entryModel = model<SchoolHour>("Hour", hourSchema);
