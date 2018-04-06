const LocalStrategy = require("passport-local").Strategy;
const User          = require("../models/User");
const bcrypt        = require("bcrypt");
const FbStrategy    = require('passport-facebook').Strategy;


module.exports = (passport,app) => {
  
  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });
  
  passport.deserializeUser((id, cb) => {
    User.findOne({ _id: id }, (err, user) => {
      if (err) { return cb(err); }
      cb(null, user);
    });
  });

passport.use(new FbStrategy({
    clientID: "344852232670246",
    clientSecret: "b1804ed486295ccf84d82152a1124005",
    callbackURL: "/auth/facebook/callback"
  }, (accessToken, refreshToken, profile, done) => {
    console.log("Esto es lo que recibimos de Facebook")
    console.log(profile);
    User.findOne({ facebookID: profile.id }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (user) {
        //app.locals.user = user;
        return done(null, user);
      }
      const newUser = new User({
        username: profile.displayName,
        facebookID: profile.id,
        email: profile.email,
        picPath: `https://graph.facebook.com/${profile.id}/picture?picture?type=large&width=720&height=720`
        //Aqui tenemos el height y width de la imagen 
      });
  
      newUser.save((err) => {
        if (err) {
          return done(err);
        }
        //app.locals.user = newUser;
        res.status(200).json(newUser);
        done(null, newUser);
      });
    });
  
  }));
  

app.use(passport.initialize());
app.use(passport.session());

}
