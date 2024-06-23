const express = require('express');
const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Replace these with your actual Google credentials
const GOOGLE_CLIENT_ID = "470429310888-5bba0lvv82abbd7eag26962bq6tos3lb.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";




passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // Ensure profile.emails is an array and has at least one element
      const email = profile.emails && profile.emails[0] ? profile.emails[0].value : null;
      const user = {
        id: profile.id,
        name: profile.displayName,
        email: email,
        photos:profile.photos,
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