import express from "express";
import { login, signUp } from "../controllers/auth.controller";

export const authRouter = express.Router();

authRouter.route("/login").get(login);
authRouter.route("/signup").post(signUp);
