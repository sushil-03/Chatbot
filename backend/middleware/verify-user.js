const jwt = require("jsonwebtoken");
const User = require("../models/User");
module.exports = async function (req, res, next) {
  const token = req.header("auth-token");
  if (!token) {
    return res.status(200).send({
      success: false,
      message: "No token here",
    });
  }

  const data = jwt.verify(token, process.env.JWT_SECRET_KEY);

  if (!data) {
    return res.status(200).send({
      success: false,
      message: "Unauthorise token",
    });
  }

  //Retreive data
  const user = await User.findById(data.user).select("-password");
  req.user = user;
  next();
};
