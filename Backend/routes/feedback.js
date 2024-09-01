const express = require("express");
const { submitFeedback } = require("../Controllers/feedbackController.js");

const router = express.Router();

// Feedback submission route
router.post("/", submitFeedback);

module.exports = router;

