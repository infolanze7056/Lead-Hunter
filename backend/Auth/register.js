const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

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
    bcrypt.hash(password, 10).then(async (hash) => {
      await User.create({ name, email, password: hash, phonenumber })
        .then((user) => {
          const maxAge = 3 * 60 * 60;
          const token = jwt.sign(
            { id: user._id, name, role: user.role },
            process.env.JWTSECRET,
            { expiresIn: maxAge } // 3hrs in sec
          );
          res.cookie("jwt", token, {
            httpOnly: true,
            maxAge: maxAge * 1000, // 3hrs in ms
          });
          res.status(201).json({
            message: "User successfully created",
            user: user._id,
          });
        })
        .catch((error) =>
          res.status(400).json({
            message: "User not successfully created",
            error: error.message,
          })
        );
    });
  } catch (error) {
    res.status(400).json({ message: "User not successfully created", error: error.message });
  }
};
