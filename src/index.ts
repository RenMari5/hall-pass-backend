import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { config } from "./config/config";

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(config.mongoUri)
  .then(() => console.log("Connected to MongoDB"));

const port = config.port;

app.listen(port, () => console.log(`Listening on port: ${port}.`));
