const express = require("express");
require("dotenv").config();

const app = express();

// Middlewares

app.use(express.json());

// Basic Route
app.get("/", (req, res) => {
  res.send("Backend is running...");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
