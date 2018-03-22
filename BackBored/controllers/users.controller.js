const User = require("../models/User");

exports.deleteUser = (req,res,next)=>{
  User.findByIdAndRemove(req.params.id)
  .then(items=>res.status(200).json(items))
  .catch(e=>res.status(500).send(e));
}


//img
exports.patchImageUser = (req,res,next)=>{
  console.log(req.file)
  const update ={
   image: `/uploads/${req.file.filename}` 
 }
 console.log("entrando a modificar usuario")
   User.findByIdAndUpdate(req.params.id, update, {new:true})
 .then(item=>{
   console.log(item)
   res.status(200).json(item)
 })
 .catch(e=>res.status(500).send(e));
}


exports.patchUser = (req,res,next)=>{
  console.log("entrando a modificar usuario")
    User.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(item=>res.status(200).json(item))
  .catch(e=>res.status(500).send(e));
}


exports.getUsers = function (req, res, next) {
  User.find()
      .then(items => res.status(200).json(items))
      .catch(e => res.status(500).send(e));
}

exports.getUserById = function (req, res, next) {
  
  User.findById(req.params.id)
  .then(item => {
    console.log(item)
    res.status(200).json(item)})
    .catch(e => res.status(500).send(e))
}



// exports.getUsers = function(req, res, next) {
//   User.find()
//   .then(items=>res.status(200).json(items))
//   .catch(e=>res.status(500).send(e));
// }