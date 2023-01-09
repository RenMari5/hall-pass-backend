import { Request, Response } from "express";
import { entryService } from "../services/entry.service";

export async function getEntries(req: Request, res: Response) {
  try {
    const entries = await entryService.getEntries(
      req.query.userId as string,
      req.query.date as string
    );
    return res.status(200).json(entries);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function getEntry(req: Request, res: Response) {
  try {
    const entry = await entryService.getEntry(req.params.id);
    if (!entry) return res.status(404).json("Entry not found");
    return res.status(200).json(entry);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function addEntry(req: Request, res: Response) {
  try {
    const newEntry = await entryService.addEntry(req.body);
    return res.status(201).json(newEntry);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function updateEntry(req: Request, res: Response) {
  try {
    const updatedEntry = await entryService.updateEntry(
      req.params.id,
      req.body
    );
    return res.status(200).json(updatedEntry);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function deleteEntry(req: Request, res: Response) {
  try {
    await entryService.deleteEntry(req.params.id);
    return res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}
