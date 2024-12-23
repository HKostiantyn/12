// authRoutes.js
import express from "express";
import { registerUser, loginUser, getUserData, getAllUsersData, updateUser } from "../controllers/authController.js";

const router = express.Router();

// Routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get('/:userId', getUserData);
router.get('/user/allUsers', getAllUsersData);
router.post('/:userId/avatar', updateUser);



export default router; // Use `export default` for ES module compatibility
