const User = require("../model/User")
const bcrypt = require("bcryptjs")


 // for the register

exports.register = async (req, res, next) => {
  const { name, email, password, phonenumber } = req.body;
    
  // Validate email, password, and phone number
  if (!name || !email || !password || !phonenumber) {
      return res.status(400).json({ message: "Please provide all required fields" });
  }

  if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters long" });
  }

  try {
      const hash = await bcrypt.hash(password, 10);
      const user = await User.create({ name, email, password: hash, phonenumber });
      res.status(200).json({ message: "User successfully created", user });
  } catch (error) {
      res.status(400).json({ message: "User not successfully created", error: error.message });
  }
};



