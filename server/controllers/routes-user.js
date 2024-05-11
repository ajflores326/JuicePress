import { Router, request } from "express";
import User from "../models/user.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import validationMiddleware from "../middleware/validationMiddleware.js";

const router = Router();

export default router;
