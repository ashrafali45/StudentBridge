const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(cors());

// 🔗 MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/studentbridge");

// ================= USER MODEL =================
const User = mongoose.model("User", {
  email: String,
  password: String
});

// ================= JOB MODEL =================
const Job = mongoose.model("Job", {
  title: String,
  city: String
});

// ================= AUTH =================

// Signup
app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send("User created");
});

// Login
app.post("/login", async (req, res) => {
  const user = await User.findOne(req.body);

  if (!user) return res.status(400).send("Invalid credentials");

  const token = jwt.sign({ id: user._id }, "secret");
  res.send({ token });
});

// ================= JOBS =================

// Add job
app.post("/jobs", async (req, res) => {
  const job = new Job(req.body);
  await job.save();
  res.send("Job added");
});

// Get jobs
app.get("/jobs", async (req, res) => {
  const jobs = await Job.find();
  res.send(jobs);
});

// ================= SERVER =================
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});