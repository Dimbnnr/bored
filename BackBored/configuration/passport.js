const LocalStrategy = require("passport-local").Strategy;
const User          = require("../models/User");
const bcrypt        = require("bcrypt");
const FbStrategy    = require('passport-facebook').Strategy;
const mongoose      = require('mongoose');

module.exports = (passport,app) => {
  
  passport.serializeUser((user, cb) => {
    console.log(user)
    cb(null, user._id);
  });
  
  passport.deserializeUser((id, cb) => {
    console.log(id)
    var userId = mongoose.Schema.Types.ObjectId(id);
    User.findById(userId , function(err, user) {
       done(err, user);
    });
  });

passport.use(new FbStrategy({
    clientID: "344852232670246",
    clientSecret: "b1804ed486295ccf84d82152a1124005",
    callbackURL: "/api/auth/facebook/callback"
  }, (accessToken, refreshToken, profile, done) => {
    console.log("Esto es lo que recibimos de Facebook")
    console.log(profile);
    
  
  }));
  

app.use(passport.initialize());
app.use(passport.session());

}
