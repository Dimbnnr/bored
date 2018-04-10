const User = require('../models/User');


exports.login = (req, res) => {
User.findOne({fullName:req.body.name})
  .then(user =>{
    if(user){
      console.log("el usuario ya existe")
      res.status(200).json(user);
    }else{
      const newUser = new User ({
        fullName: req.body.name,
        firstName: req.body.firstName,
        email: req.body.email,
        image: req.body.photoUrl,
        facebookID: req.body.id
      })
      console.log("creando usuario")
      newUser.save()
        .then(userCreated =>res.status(200).json(userCreated))
    }
  })
  res.status(200).json({ message: "Success" });
};

exports.logout = (req, res) => {
  req.logout();
  res.status(200).json({ message: "Success" });
};

exports.loggedin = (req, res) => {
  if (req.isAuthenticated()) { return res.status(200).json(req.user); }
  return res.status(403).json({ message: "Unauthorized" });
};
