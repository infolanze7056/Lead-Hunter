const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const axios = require('axios');

exports.register = async (req, res, next) => {
  const { name, email, password, phonenumber, payment_status } = req.body;

  // Validate email, password, and phone number
  if (!name || !email || !password || !phonenumber || !payment_status) {
    return res.status(400).json({ message: "Please provide all required fields" });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: "Password must be at least 6 characters long" });
  }

  // If payment is not successful, do not proceed with registration
  // if (payment_status !== 'SUCCESSFUL') {
  //   return res.status(400).json({ message: "Payment not successful. Cannot proceed with registration." });
  // }
  
  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const user = await User.create({ name, email, password: hashedPassword, phonenumber });

    // Generate JWT token
    const maxAge = 3 * 60 * 60; // 3 hours in seconds
    const token = jwt.sign(
      { id: user._id, name, role: user.role },
      process.env.JWTSECRET,
      { expiresIn: maxAge }
    );

    // Set JWT token in cookie
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: maxAge * 1000, // Convert to milliseconds
    });

    // Respond with success message and user ID
    res.status(201).json({
      message: "User successfully created",
      user: user._id,
    });

  } catch (error) {
    // Handle any errors that occur during user creation or token generation
    res.status(400).json({ message: "User not successfully created", error: error.message });
  }
};
