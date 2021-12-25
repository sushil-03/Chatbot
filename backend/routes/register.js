const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");

router.post("/register", async (req, res) => {
  try {
    const {
      name,
      student_id,
      roll,
      password,
      semester,
      course,
      college,
      branch,
      phone,
    } = req.body;
    console.log(req.body);
    const user = await User.findOne({ student_id });
    if (user) {
      return res.status(401).send({
        success: false,
        message: "User already exist",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      student_id,
      roll,
      password: hashedPassword,
      semester,
      course,
      college,
      branch,
      phone,
    });
    console.log(newUser);

    await newUser.save();

    console.log("runned");
    res.status(200).send({
      success: true,
      message: "User created",
    });
  } catch (error) {
    console.log(error);
    return res.status(401).send({
      success: false,
      message: "Something wrong with backend",
    });
  }
});
module.exports = router;
