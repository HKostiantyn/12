const express = require("express");
const { registerUser, loginUser , getUserData } = require("../controllers/authController");

const router = express.Router();

// Routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get('/:userId', getUserData);

module.exports = router;
