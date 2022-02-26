const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");

router.post("/register", async (req, res) => {
  try {
    const {
      name,
      college,
      collegeEmailId,
      branch,
      student_id,
      semester,
      roll,
      course,
      contact,
      password,
    } = req.body;
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
      college,
      collegeEmailId,
      branch,
      student_id,
      semester,
      roll,
      course,
      contact,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(200).send({
      success: true,
      message: "User created",
    });
  } catch (error) {
    return res.status(401).send({
      success: false,
      message: "Something wrong with backend",
    });
  }
});
module.exports = router;
