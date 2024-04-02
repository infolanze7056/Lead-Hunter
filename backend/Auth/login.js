// const User = require("../model/User");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// exports.login = async (req, res) => {
//   const { email, password } = req.body;

//   // Check if email and password are provided
//   if (!email || !password) {
//     return res.status(400).json({ message: "Email or Password not present" });
//   }

//   try {
//     // Retrieve user from the database
//     const user = await User.findOne({ email });

//     // Check if user exists
//     if (!user) {
//       return res
//         .status(400)
//         .json({ message: "Login not successful", error: "User not found" });
//     }

//     // Compare passwords
//     bcrypt.compare(password, user.password).then(function (result) {
//       if (result) {
//         const maxAge = 2 * 60;
//         const token = jwt.sign(
//           { id: user._id, email: user.email, role: user.role },
//           process.env.JWTSECRET,
//           { expiresIn: maxAge } // 3hrs in sec
//         );
//         res.cookie("jwt", token, {
//           httpOnly: true,
//           maxAge: maxAge * 1000, // 3hrs in ms
//         });
//         res.status(200).json({
//           message: "User successfully Logged in",
//           user: {
//             _id: user._id,
//             email: user.email,
//             role: user.role
//           },
//           token: token
//         });
//       } else {
//         res.status(400).json({ message: "Login not successful" });
//       }
//     });
//   } catch (error) {
//     return res
//       .status(400)
//       .json({ message: "An error occurred", error: error.message });
//   }
// };




const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const crypto = require("crypto");

// Function to generate a unique transaction ID
function generateTransactionID() {
  const timestamp = Date.now();
  const randomNum = Math.floor(Math.random() * 1000000);
  const merchantPrefix = "T";
  const transactionID = `${merchantPrefix}${timestamp}${randomNum}`;
  return transactionID;
}

// Function to initiate a new payment
async function newPayment(req, res) {
  try {
    const { password, email } = req.body;

    // Construct the payment data
    const data = {
      merchantId: "PGTESTPAYUAT",
      merchantTransactionId: generateTransactionID(),
      merchantUserId: "MUID2QWQEFW5Q6WSER7",
      amount: 1000, // Example amount (modify as needed)
      redirectUrl: "http://localhost:5000/api/phonepe/status/",
      redirectMode: "POST",
      email: email,
      password: password,
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };

    // Convert the data to payload and calculate checksum
    const payload = JSON.stringify(data);
    const payloadMain = Buffer.from(payload).toString("base64");
    const keyIndex = 1;
    const string =
      payloadMain + "/pg/v1/pay" + "099eb0cd-02cf-4e2a-8aca-3e6c6aff0399";
    const sha256 = crypto.createHash("sha256").update(string).digest("hex");
    const checksum = sha256 + "###" + keyIndex;

    // Set the URL and options for the payment request
    const URL =
      "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";
    const options = {
      method: "POST",
      url: URL,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-VERIFY": checksum,
      },
      data: {
        request: payloadMain,
      },
    };

    // Make the payment request
    const response = await axios(options);
    return response.data.data.instrumentResponse.redirectInfo.url;

  } catch (error) {
    console.error("Error making payment request:", error);
    throw error;
  }
}

// Login route
const login = async (req, res) => {
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
      return res
        .status(400)
        .json({ message: "Login not successful", error: "User not found" });
    }

    // Compare passwords
    const result = await bcrypt.compare(password, user.password);

    if (!result) {
      return res.status(400).json({ message: "Login not successful" });
    }

    // Check payment status
    if (user.payment_status === "SUCCESSFUL") {
      const maxAge = 2 * 60; // 3hrs in minutes
      const token = jwt.sign(
        { id: user._id, email: user.email, role: user.role },
        process.env.JWTSECRET,
        { expiresIn: maxAge } // 3hrs in sec
      );
      res.cookie("jwt", token, {
        httpOnly: true,
        maxAge: maxAge * 1000, // 3hrs in ms
      });
      return res.status(200).json({
        message: "User successfully Logged in",
        user: {
          _id: user._id,
          email: user.email,
          role: user.role,
        },
        token: token,
      });
    } else if (user.payment_status === "PENDING") {
      try {
        // Call newPayment function to get payment page URL
        const paymentPageUrl = await newPayment(req, res);
        // Redirect user to the payment page URL
        return res.redirect(paymentPageUrl);
      } catch (error) {
        console.error("Error making payment request:", error);
        return res
          .status(500)
          .json({ message: "Error making payment request" });
      }
    } else {
      // Handle other payment statuses
      return res.status(400).json({ message: "Login not successful" });
    }
  } catch (error) {
    console.error("An error occurred:", error);
    return res.status(500).json({ message: "An error occurred" });
  }
};

module.exports = { newPayment, login };
