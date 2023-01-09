import express from "express";
import {
  getHour,
  getHours,
  addHour,
  updateHour,
  deleteHour,
} from "../controllers/hour.controller";

export const hourRouter = express.Router();

hourRouter.route("/").get(getHours).post(addHour);
hourRouter.route("/:id").get(getHour).patch(updateHour).delete(deleteHour);
