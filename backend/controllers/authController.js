// authController.js
import User from '../models/userModel.js';
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// Register user
export const registerUser = async (req, res) => {
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
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token, userId: user._id, admin: user.isAdmin, avatar: user.avatar, username:user.username});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUserData = async (req, res) => {
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

export const getAllUsersData = async (req, res) => {
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

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json({ message: 'User deleted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user' });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { imagePreviewUrl } = req.body; // Parse imagePreviewUrl from the JSON body

    if (!imagePreviewUrl) {
      return res.status(400).json({ message: "Invalid or missing image URL" });
    }

    console.log("Received image URL:", imagePreviewUrl);

    // Find the user by userId and update their avatar field
    const user = await User.findByIdAndUpdate(
      req.params.userId,
      { avatar: imagePreviewUrl }, // Update the avatar field with the new image URL
      { new: true } // Return the updated user document
    );

    if (!user) return res.status(404).json({ message: "User not found" });

    // Send the updated user information back in the response
    res.json({ message: "User updated successfully!", user });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Error updating user" });
  }
};
