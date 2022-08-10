const User = require("../models/User");

module.exports.createUser = async function (req, res) {

  const checkuser = await User.findOne({ emailId: req.body.emailId });
  console.log(req.body)
  if (checkuser) {
    return res.json({ msg: "Username Already exists", status: false });
  }

  
  console.log(req.body)
  const user = await User.create({
    name: req.body.name,
    password: req.body.password,
    emailId: req.body.emailId
  });

  
  return res.json({ msg: "Register successfull", status: true });
};

module.exports.login =async function (req, res) {
  const checkuser = await User.findOne({ emailId: req.body.emailId });

  if (req.body.emailId==checkuser.emailId && req.body.password==checkuser.password) {
    return res.json({ msg: "logged in", status: true });
  }
  else  res.json({ msg: "invalid credentials", status: false });
};

module.exports.logout =async function (req, res) {
  return res.json({ "msg": "logged out" })
};


