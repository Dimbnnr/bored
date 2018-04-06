const User = require('../models/User');


exports.logout = (req, res) => {
  req.logout();
  res.status(200).json({ message: "Success" });
};

exports.loggedin = (req, res) => {
  if (req.isAuthenticated()) { return res.status(200).json(req.user); }
  return res.status(403).json({ message: "Unauthorized" });
};
