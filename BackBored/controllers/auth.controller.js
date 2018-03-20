const User = require('../models/User');

const passport = require("passport");
const multer  = require('multer');
const upload = multer({ dest: './public/uploads/' });

const bcrypt = require('bcrypt');
const bcryptSalt = 9;


exports.signup = (req, res,next)=>{
  console.log(req.body)
    if (!req.body.username || !req.body.lastName || !req.body.age || !req.body.email) {
        res.status(400).json({ message: "Provide all the fields to sign up please" });
      }
    
      // db.inventory.find( { $and: [ { price: { $ne: 1.99 } }, { price: { $exists: true } } ] } )

      User.findOne({ $and: [ { username : req.body.username }, { lastName : req.body.lastName } ] })
      .then(user => {
        console.log(user)
        if(user && user.username === req.body.username && user.lastName === req.body.lastName ){
            res.status(400).json({message : "The user already exist"})
        }
        else{
          console.log("entro!")    
        let hashPass = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(9), null);
        
          console.log(req.file)
          console.log(req.body)
        let newUser  = new User({
          username:req.body.username,
          lastName:req.body.lastName,
          age: req.body.age,
          phoneNumber: req.body.phoneNumber,
          email: req.body.email,
          location:{
            address:req.body.address,
            coordinates: [req.body.lat, req.body.lng]
          },
          belief: req.body.belief,
          citation: req.body.citation,
          image: `/uploads/${req.file.filename}`,
          averageBoredTimePerWeek: req.body.averageBoredTimePerWeek,
          password: hashPass,
        });
    
        console.log(newUser);
        newUser.save()
          .then(user => {
            req.login(user, (err) => {
              if (err) { return res.status(500).json({ message: "Something went wrong" }); }
              res.status(200).json(req.user);
            })
          .catch(err => res.status(400).json({ message: "Something went wrong" }))
          })
        }
      })
      .catch((err)=>{
        console.log(err)
      })

}



exports.login = (req,res,next)=>{
  console.log("llego aqui")
  passport.authenticate("local", (err, user, info) => {
    if (err) { return res.status(401).json(err); }
    if (!user) { return res.status(401).json(info); }
    req.login(user, (err) => {
      if (err) { return res.status(500).json({ message: "Something went wrong" }); }
      return res.status(200).json(req.user);
    });
  })(req, res, next);
}


exports.logout = (req, res) => {
  req.logout();
  res.status(200).json({ message: "Success" });
};

exports.loggedin = (req, res) => {
  if (req.isAuthenticated()) { return res.status(200).json(req.user); }
  return res.status(403).json({ message: "Unauthorized" });
};
