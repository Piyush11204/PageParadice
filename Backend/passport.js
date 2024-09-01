require('dotenv').config(); // Ensure this is at the top
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

// Environment variables
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID_KEY;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET_KEY;
const FACEBOOK_CLIENT_ID = process.env.FACEBOOK_CLIENT_ID_KEY ; 
const FACEBOOK_CLIENT_SECRET = process.env.FACEBOOK_CLIENT_SECRET_KEY ; 

// Google OAuth strategy
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

// Facebook OAuth strategy
passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_CLIENT_ID,
      clientSecret: FACEBOOK_CLIENT_SECRET,
      callbackURL: "/auth/facebook/callback",
      profileFields: ['id', 'displayName', 'emails', 'photos'],
    },
    (accessToken, refreshToken, profile, done) => {
      const email = profile.emails && profile.emails[0] ? profile.emails[0].value : null;
      const user = {
        id: profile.id,
        name: profile.displayName,
        email: email,
        photos: profile.photos,
      };
      console.log(email , profile)
      return done(null, user);
    }
  )
);


// User serialization and deserialization
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
