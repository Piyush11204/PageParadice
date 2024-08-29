require('dotenv').config(); // Ensure this is at the top
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Environment variables
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID_KEY;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET_KEY;

// Verify environment variables are loaded
console.log('Google Client ID:', GOOGLE_CLIENT_ID);
console.log('Google Client Secret:', GOOGLE_CLIENT_SECRET);

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      const email = profile.emails && profile.emails[0] ? profile.emails[0].value : null;
      const user = {
        id: profile.id,
        name: profile.displayName,
        email: email,
        photos: profile.photos,
      };
      return done(null, user);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
