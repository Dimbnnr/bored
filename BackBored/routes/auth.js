const express = require('express');
const router = express.Router();
const authController = require("../controllers/auth.controller");
const passport = require ('passport');

router.post("/login", authController.login);

router.post("/logout", authController.logout);
router.get("/loggedin", authController.loggedin);

// router.get("/facebook", passport.authenticate("facebook"));
// router.get("/facebook/callback", passport.authenticate("facebook", {
//     successRedirect: "/view-events",
//     failureRedirect: "/"
// }));

module.exports= router;