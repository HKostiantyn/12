const express = require("express");
const { registerUser, loginUser , getUserData, getAllUsersData } = require("../controllers/authController");

const router = express.Router();

// Routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get('/:userId', getUserData);
router.get('/user/allUsers', getAllUsersData);

module.exports = router;
