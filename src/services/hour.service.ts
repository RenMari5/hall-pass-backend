import { SchoolHour } from "../types/hour.types";
import { hourModel } from "../models/hour.model";
import dayjs from "dayjs";

// async function getEntries() {
//   const entries = await entryModel.find().lean();
//   return entries;
// }
async function getHour(id: string) {
  const hour = await hourModel.findById(id).lean();
  return hour;
}

async function getHours(userId: string, date?: string) {
  let query = {};
  if (date && dayjs(date).isValid()) {
    query = { userId, dateAdded: date };
  } else {
    query = { userId };
  }
  const hours = await hourModel.find(query).sort({ createdAt: "desc" }).lean();
  return hours;
}

async function getHourByUserId(userId: string) {
  const hour = await hourModel.findOne({ userId }).lean();
  return hour;
}

async function addHour(data: Partial<SchoolHour>) {
  const newHour = await hourModel.create(data);
  return newHour;
}

async function updateHour(id: string, data: Partial<SchoolHour>) {
  const updatedHour = await hourModel.findByIdAndUpdate(id, data, {
    new: true,
  });
  return updatedHour;
}

async function deleteHour(id: string) {
  return await hourModel.findByIdAndDelete(id);
}

export const hourService = {
  getHour,
  getHours,
  getHourByUserId,
  addHour,
  updateHour,
  deleteHour,
};
