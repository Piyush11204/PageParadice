const router = require("express").Router();
const passport = require("passport");

const CLIENT_URL = "http://localhost:3000/";
// cat on run

// Successful login
router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successful",
      user: req.user,
    });
  } else {
    res.status(401).json({
      success: false,
      message: "User not authenticated",
    });
  }
});

// Failed login
router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "Login failure",
  });
});

// Logout
router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      console.error("Error during logout:", err);
      return res.status(500).json({ success: false, message: "Error during logout" });
    }
    res.redirect(CLIENT_URL); // Redirect to client on successful logout
  });
});

// Google authentication routes
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

// Github authentication routes
router.get("/github", passport.authenticate("github", { scope: ["profile", "email"] }));

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

// Facebook authentication routes
router.get("/facebook", passport.authenticate("facebook", { scope: ["email"] }));

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

module.exports = router;
