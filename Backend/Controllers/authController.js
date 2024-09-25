const bcryptjs = require("bcryptjs");
const User = require("../models/User");

const registerUser = async (req, res) => {
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
};

module.exports = { registerUser };
