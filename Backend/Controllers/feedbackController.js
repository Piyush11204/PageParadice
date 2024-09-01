const Feedback = require("../");

const submitFeedback = async (req, res) => {
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
};

module.exports = { submitFeedback }