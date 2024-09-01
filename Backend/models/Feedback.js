const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  comment: String,
},{timestamps:true});

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
