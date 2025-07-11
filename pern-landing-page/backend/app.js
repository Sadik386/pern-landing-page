const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./src/routes/auth");
const demoRoutes = require("./src/routes/demo");
const models = require("./models");

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: "*", // Allow all origins for development
  credentials: true
}));
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/demo", demoRoutes);

app.get("/", (req, res) => {
  res.json({ message: "PERN Stack Backend is running!" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

