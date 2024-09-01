const express = require("express");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
require("dotenv").config();
require("./passport");

// Import routes
const authRoute = require("./routes/auth");
const feedbackRoute = require("./routes/feedback");
// const userRoute = require("./routes/users");

// Import DB connection
const connectDB = require("./DB/db.js");

const app = express();

// Session configuration
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// CORS middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

// JSON parsing middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/auth", authRoute);
app.use("/feedback", feedbackRoute);
// app.use("/users", userRoute);

// Start server
app.listen(5000, () => {
  console.log("Server is running on port 5000!");
});
