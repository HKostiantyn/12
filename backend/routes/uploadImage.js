import express from "express";
import { uploadImage } from "../controllers/imageUploadController.js";

const router = express.Router();

// Routes
router.post("/", uploadImage);

export default router;
