const jwt = require("jsonwebtoken");
const User = require("../models/User");
module.exports = async function (req, res, next) {
  console.log("checking token");
  const token = req.header("auth-header");
  if (!token) {
    return res.status(301).send({
      success: false,
      message: "No token",
    });
  }
  console.log("token verified");

  const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
  console.log("dataa", data);

  if (!data) {
    return res.status(301).send({
      success: false,
      message: "Unauthorise token",
    });
  }
  console.log("Token verified");
  //Retreive data
  const user = await User.findById(data.user).select("-password");
  console.log("User :", user);
  req.user = user;
  next();
};
