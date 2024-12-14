const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Register user
exports.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "Email already exists" });

    const newUser = await User.create({ username, email, password });
    res.status(201).json({ message: "User created", userId: newUser._id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Login user
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token, userId: user._id, admin: user.isAdmin });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getUserData = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    res.status(200).send(user);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).send({ message: 'Error fetching user data' });
  }
};


exports.getAllUsersData = async (req, res) => {
  try {
    
    const users = await User.find(); 

    if (!users || users.length === 0) {
      return res.status(404).send({ message: 'No users found' });
    }

    res.status(200).send(users);

    
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).send({ message: 'Error fetching user data' });
  }
};