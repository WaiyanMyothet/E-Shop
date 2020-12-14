//const logger = require("logger");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
//const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

//const { GOOGLE_CONFIG, FACEBOOK_CONFIG } = require('../config/config');
const User = require("../database/models/user");

//const slugify = require('slugify');
let opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opts, (payload, done) => {
      // User.findById(payload._id)
      //   .select("-password")
      //   .then((user) => {
      //     if (user) {
      //       return done(null, user);
      //     } else {
      //       return done(null, false);
      //     }
      //   });
    })
  );
};
