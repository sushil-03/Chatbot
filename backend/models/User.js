// Registration information
const Mongoose = require("mongoose");
const userSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  collegeEmailId: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  student_id: {
    type: String,
    required: true,
    unique: true,
  },
  semester: {
    type: String,
    required: true,
  },
  roll: {
    type: Number,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },

  contact: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const User = Mongoose.model("users", userSchema);
module.exports = User;
