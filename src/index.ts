import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { config } from "./config/config";
import { authRouter } from "./routes/auth.routes";
import { hourRouter } from "./routes/hour.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/hours", hourRouter);

mongoose
  .connect(config.mongoUri)
  .then(() => console.log("Connected to MongoDB"));

const port = config.port;

app.listen(port, () => console.log(`Listening on port: ${port}.`));
