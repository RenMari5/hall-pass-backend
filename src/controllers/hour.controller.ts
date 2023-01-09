import { Request, Response } from "express";
import { hourService } from "../services/hour.service";

export async function getHours(req: Request, res: Response) {
  try {
    const hours = await hourService.getHours(
      req.query.userId as string,
      req.query.schoolHour as string
    );
    return res.status(200).json(hours);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function getHour(req: Request, res: Response) {
  try {
    const hour = await hourService.getEntry(req.params.id);
    if (!hour) return res.status(404).json("Entry not found");
    return res.status(200).json(hour);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function addHour(req: Request, res: Response) {
  try {
    const newHour = await hourService.addHour(req.body);
    return res.status(201).json(newHour);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function updateHour(req: Request, res: Response) {
  try {
    const updatedHour = await hourService.updateHour(req.params.id, req.body);
    return res.status(200).json(updatedHour);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function deleteHour(req: Request, res: Response) {
  try {
    await hourService.deleteHour(req.params.id);
    return res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}
