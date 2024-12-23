import express from "express";
import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
import User from '../models/userModel.js';

const router = express.Router();

// Google OAuth2 client
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Route for Google login
router.post("/google-login", async (req, res) => {
    const { token } = req.body;
   
    try {
        // Verify the Google token
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload();
        const { email, name, picture } = payload;

        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });
    

        // Create your own JWT token
        const jwtToken = jwt.sign(
            { email, name, picture },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        // Send the custom token to the client
        res.status(200).json({ token: jwtToken, user: { email, name, picture },  userId: user._id });
    } catch (err) {
        console.error("Error verifying Google token", err);
        res.status(400).json({ error: "Invalid Google token" });
    }
});


export default router; 