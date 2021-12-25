const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const verifyUser = require("../middleware/verify-user");
router.get("/details", verifyUser, (req, res) => {
  console.log("checking middleware");
  res.status(200).json({
    success: true,
    data: req.user,
  });
});

//Login
router.post("/login", async (req, res) => {
  const { student_id, password } = req.body;
  console.log(student_id, req.body);
  const user = await User.findOne({ student_id });
  console.log("user", user);
  if (!user) {
    res.status(401).send({
      success: false,
      message: "No user with this id found ",
    });
  }
  const result = bcrypt.compare(password, user.password);
  if (!result) {
    return res.status(401).send({
      success: false,
      message: "Password is incorrect",
    });
  }

  const payload = {
    user: user._id,
  };

  //Now we set jwt token
  try {
    const token = await jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });
    console.log("Token ", token);
    res.send({
      success: true,
      message: "Successfully logged in",
      token,
    });
  } catch (error) {
    return res.send({
      success: false,
      message: error.message,
    });
  }
});
module.exports = router;
