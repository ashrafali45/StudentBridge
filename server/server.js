require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// ROUTES
app.use("/api/auth", require("./routes/auth"));
app.use("/api/jobs", require("./routes/jobs"));

// DB CONNECT
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// START SERVER
app.listen(5000, () => console.log("Server running on port 5000"));