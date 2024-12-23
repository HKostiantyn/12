import path from 'path';
import multer from 'multer';
import fs from 'fs';
import { fileURLToPath } from 'url';
import User from '../models/userModel.js';

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure uploads directory exists
const uploadDirectory = path.join(__dirname, '../uploads'); // Adjust path if necessary
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory, { recursive: true }); // Use recursive to ensure parent directories exist
}

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDirectory);
  },
  filename: (req, file, cb) => {
    const extname = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${Date.now()}${extname}`);
  },
});

// File filter for image validation
const fileFilter = (req, file, cb) => {
  const filetypes = /jpe?g|png|webp/;
  const mimetypes = /image\/jpe?g|image\/png|image\/webp/;

  const extname = path.extname(file.originalname).toLowerCase();
  const mimetype = file.mimetype;

  if (filetypes.test(extname) && mimetypes.test(mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only images (JPEG, PNG, WEBP) are allowed"), false);
  }
};

// Multer upload instance
const upload = multer({ storage, fileFilter });
const uploadSingleImage = upload.single("image");

// Controller function for image upload
export const uploadImage = (req, res) => {
  uploadSingleImage(req, res, (err) => {
    if (err) {
      console.error("Image upload error:", err); // Log the error for debugging
      return res.status(400).send({ message: err.message });
    } else if (req.file) {
      // Respond with the uploaded image details
      return res.status(200).send({
        message: "Image uploaded successfully",
        image: `/uploads/${req.file.filename}`, // Return relative path
      });
    } else {
      return res.status(400).send({ message: "No image file provided" });
    }
  });
};