const bcrypt = require("bcrypt");
const Mongoose = require("mongoose")


const UserSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  },
  phonenumber: {
    type: String,
    unique: true,
    minlength: 10,
    maxlength: 10,
    // Regular expression for Indian phone number validation
    match: /^[6-9]\d{9}$/,
    required: true,
  },
  role: {
    type: String,
    default: "Basic",
    required: true,
  },
  transaction_id: {
    type : String,
    // required : true,
  },
  payment_status: {
    type : String,
    enum : ['PENDING','SUCCESSFUL','FAILED'],
    default : "PENDING"
  }
},{timestamps : true})

const User = Mongoose.model("user", UserSchema);

module.exports = User;