const express = require('express');
const router = express.Router();
const authController = require("../controllers/auth.controller");
const passport = require ('passport');

router.post("/login",  authController.signup);
router.post("/logout", authController.logout);
router.get("/loggedin", authController.loggedin);

router.get("/auth/facebook", passport.authenticate("facebook"));
router.get("/auth/facebook/callback", passport.authenticate("facebook", {
    successRedirect: "/view-events",
    failureRedirect: "/"
}));

module.exports= router;