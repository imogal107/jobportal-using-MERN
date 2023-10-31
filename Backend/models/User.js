const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = new Schema({
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  userType: {
    type: String,
    required: true
  },
  birthdate: {
    type: Date,
    required: true
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;