const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcryptjs = require('bcryptjs');
const PORT = 5000;

const app = express();

const MONGO_URL = "mongodb://localhost:27017/PageParadise";

// Middleware
app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error", err));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  comment: String,
});

const User = mongoose.model("User", userSchema);
const Feedback = mongoose.model("Feedback", feedbackSchema);

app.post("/register", async (req, res) => {
  try {
    if (!req.body.password) {
      return res.status(400).json({ error: "Password is required" });
    }
    const hashedPassword = await bcryptjs.hashSync(req.body.password, 10);
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.error("Error during registration", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/feedback", async (req, res) => {
  try {
    const newFeedback = new Feedback({
      name: req.body.name,
      email: req.body.email,
      comment: req.body.comment,
    });
    const savedFeedback = await newFeedback.save();
    res.status(201).json(savedFeedback);
  } catch (error) {
    console.error("Error during feedback submission", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
}).on('error', (err) => {
  console.error("Server error", err);
});
