const User = require("../model/User")
const bcrypt = require("bcryptjs")

// for the login

exports.login = async (req, res) => {
    const { email, password } = req.body;
  
    // Check if email and password are provided
    if (!email || !password) {
        return res.status(400).json({ message: "Email or Password not present" });
    }
  
    try {
        // Retrieve user from the database
        const user = await User.findOne({ email });
  
        // Check if user exists
        if (!user) {
            return res.status(400).json({ message: "Login not successful", error: "User not found" });
        }
  
        // Log hashed password from database and login attempt for debugging
        // console.log("Hashed password from database:", user.password);
        // console.log("Hashed password from login attempt:", bcrypt.hashSync(password, 10));
  
        // Compare passwords
        const passwordMatch = await bcrypt.compare(password, user.password);
  
        // Check if passwords match
        if (passwordMatch) {
            return res.status(200).json({ message: "Login successful", user });
        } else {
            return res.status(400).json({ message: "Invalid password" });
        }
    } catch (error) {
        return res.status(400).json({ message: "An error occurred", error: error.message });
    }
  };