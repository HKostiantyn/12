const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();
const googleAuthRoutes = require("./routes/googleAuthRoutes");
const customerRoutes = require('./routes/customerRoutes');

const app = express();

// Middleware
app.use(cors()); // Add this line to enable CORS for all domains
app.use(express.json());
app.use(bodyParser.json());
app.use(
    cors({
        origin: "http://localhost:5173", // Replace with your frontend URL
        credentials: true,
    })
);

// Import routes
const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/auth", googleAuthRoutes);
app.use('/api/subscribe', customerRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
