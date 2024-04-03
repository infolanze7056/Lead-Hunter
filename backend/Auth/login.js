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




// const User = require("../model/User");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const axios = require("axios");
// const crypto = require("crypto");

// // Function to generate a unique transaction ID
// function generateTransactionID() {
//   const timestamp = Date.now();
//   const randomNum = Math.floor(Math.random() * 1000000);
//   const merchantPrefix = "T";
//   const transactionID = `${merchantPrefix}${timestamp}${randomNum}`;
//   return transactionID;
// }

// // Function to initiate a new payment
// async function newPayment(req, res) {
//   try {
//     const { password, email, amount } = req.body;

//     // Construct the payment data
//     const data = {
//       merchantId: "PGTESTPAYUAT",
//       merchantTransactionId: generateTransactionID(),
//       merchantUserId: "MUID2QWQEFW5Q6WSER7",
//       amount: amount * 100, // Example amount (modify as needed)
//       redirectUrl: "http://localhost:5000/api/phonepe/status/",
//       redirectMode: "POST",
//       email: email,
//       password: password,
//       paymentInstrument: {
//         type: "PAY_PAGE",
//       },
//     };

//     // Convert the data to payload and calculate checksum
//     const payload = JSON.stringify(data);
//     const payloadMain = Buffer.from(payload).toString("base64");
//     const keyIndex = 1;
//     const string =
//       payloadMain + "/pg/v1/pay" + "099eb0cd-02cf-4e2a-8aca-3e6c6aff0399";
//     const sha256 = crypto.createHash("sha256").update(string).digest("hex");
//     const checksum = sha256 + "###" + keyIndex;

//     // Set the URL and options for the payment request
//     const URL =
//       "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";
//     const options = {
//       method: "POST",
//       url: URL,
//       headers: {
//         accept: "application/json",
//         "Content-Type": "application/json",
//         "X-VERIFY": checksum,
//       },
//       data: {
//         request: payloadMain,
//       },
//     };

//     // Make the payment request
//     const response = await axios(options);
//     return response.data.data.instrumentResponse.redirectInfo.url;

//   } catch (error) {
//     console.error("Error making payment request: ppppppppppp", error);
//     throw error;
//   }
// }

// // Login route
// const login = async (req, res) => {
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
//     const result = await bcrypt.compare(password, user.password);

//     if (!result) {
//       return res.status(400).json({ message: "Login not successful" });
//     }

//     // Check payment status
//     if (user.payment_status === "SUCCESSFUL") {
//       const maxAge = 2 * 60; // 3hrs in minutes
//       const token = jwt.sign(
//         { id: user._id, email: user.email, role: user.role },
//         process.env.JWTSECRET,
//         { expiresIn: maxAge } // 3hrs in sec
//       );
//       res.cookie("jwt", token, {
//         httpOnly: true,
//         maxAge: maxAge * 1000, // 3hrs in ms
//       });
//       return res.status(200).json({
//         message: "User successfully Logged in",
//         user: {
//           _id: user._id,
//           email: user.email,
//           role: user.role,
//         },
//         token: token,
//       });
//     } else if (user.payment_status === "PENDING") {
//       try {
//         // Call newPayment function to get payment page URL
//         const paymentPageUrl = await newPayment(req, res);
//         // Redirect user to the payment page URL
//         return res.redirect(paymentPageUrl);
//       } catch (error) {
//         console.error("Error making payment request:", error);
//         return res
//           .status(500)
//           .json({ message: "Error making payment request hhhhhhhhhhhhhhhhh" });
//       }
//     } else {
//       // Handle other payment statuses
//       return res.status(400).json({ message: "Login not successful" });
//     }
//   } catch (error) {
//     console.error("An error occurred:", error);
//     return res.status(500).json({ message: "An error occurred" });
//   }
// };

// module.exports = { login };





// const crypto = require("crypto");
// const axios = require("axios");
// const User = require("../model/User");
// const { login } = require("../Auth/login.js");
// const bcrypt = require("bcryptjs");
// // const bcrypt = require("bcrypt");

// function generateTransactionID() {
//   const timestamp = Date.now();
//   const randomNum = Math.floor(Math.random() * 1000000);
//   const merchantPrefix = "T";
//   const transactionID = `${merchantPrefix}${timestamp}${randomNum}`;
//   return transactionID;
// }

// async function newPayment(req, res) {
//   try {
//     const { name, phonenumber, password, role, email, amount } = req.body;

//     const data = {
//       merchantId: "PGTESTPAYUAT",
//       merchantTransactionId: generateTransactionID(),
//       merchantUserId: "MUID2QWQEFW5Q6WSER7",
//       name: name,
//       amount: amount * 100, // Convert amount to cents
//       redirectUrl: "http://localhost:5000/api/phonepe/status/",
//       redirectMode: "POST",
//       email: email,
//       role: role,
//       mobileNumber: phonenumber,
//       password: password, // Ensure password security
//       paymentInstrument: {
//         type: "PAY_PAGE",
//       },
//     };

//     const payload = JSON.stringify(data);
//     const payloadMain = Buffer.from(payload).toString("base64");
//     const keyIndex = 1;
//     const string =
//       payloadMain + "/pg/v1/pay" + "099eb0cd-02cf-4e2a-8aca-3e6c6aff0399";
//     const sha256 = crypto.createHash("sha256").update(string).digest("hex");
//     const checksum = sha256 + "###" + keyIndex;

//     const URL = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";
//     const options = {
//       method: "POST",
//       url: URL,
//       headers: {
//         accept: "application/json",
//         "Content-Type": "application/json",
//         "X-VERIFY": checksum,
//       },
//       data: {
//         request: payloadMain,
//       },
//     };

//     axios
//       .request(options)
//       .then(async function (response) {
//         console.log(response.data,"hghgfjc");
//         try {
//           const user_found = await User.findOne({
//             $or: [{ email }, { password }],
//           });

//           if (user_found) {
//             if (user_found.payment_status === "SUCCESSFUL") {
//                 return res.json({ exist: "Account already exists" });
//             } else if (user_found.payment_status === "PENDING" && user_found.email === email && user_found.phonenumber !== phonenumber) {
//                 return res.json({ exist: "Account already exists" });
//             } else if (user_found.payment_status === "PENDING" && user_found.email !== email && user_found.phonenumber !== phonenumber) {
//                 return res.json({ exist: "Account already exists" });
//             } else if (user_found.payment_status === "PENDING") {
//                 try {
//                 const hashedPassword = await bcrypt.hash(password, 10);
//                 // Update transaction ID and payment status
//                 user_found.transaction_id = response.data.data.merchantTransactionId;
//                 user_found.password = hashedPassword;
//                 user_found.amount = amount;
//                 // user_found.phonenumber = phonenumber;
//                 // user_found.email = email;
//                 user_found.name = name;
//                 await user_found.save();
//                 console.log(response.data.data.instrumentResponse.redirectInfo.url)
//                 // Redirect to payment page
//                 return res.status(200).send(response.data.data.instrumentResponse.redirectInfo.url);
//               } catch (error) {
//                 console.error("Error updating user:", error);
//                 res.status(500).json({ error: "Internal server error" });
//               }
//             }
            
//           } else {
//             const new_user = {
//               ...req.body,
//               transaction_id: response.data.data.merchantTransactionId,
//             };
//             login(new_user);
//             return res.json(
//               response.data.data.instrumentResponse.redirectInfo.url
//             );
//           }
//         } catch (error) {
//           console.log("Error querying user:", error);
//           res.status(500).json({ error: "Internal server error" });
//         }
//       })
//       .catch(function (error) {
//         console.error("Error making payment request:", error);
//         res.status(500).json({ error: "Internal server error" });
//       });
//   } catch (error) {
//     console.error("Error processing payment request:", error);
//     res.status(500).send({
//       message: error.message,
//       success: false,
//     });
//   }
// }

// //end code manish

// async function statusCheck(req, res) {
//   const merchantTransactionId = res.req.body.transactionId;
//   const merchantId = res.req.body.merchantId;

//   const keyIndex = 1;
//   const string =
//     `/pg/v1/status/${merchantId}/${merchantTransactionId}` +
//     "099eb0cd-02cf-4e2a-8aca-3e6c6aff0399";
//   // const string = `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchantId}/${merchantTransactionId}`;
//   const sha256 = crypto.createHash("sha256").update(string).digest("hex");
//   const checksum = sha256 + "###" + keyIndex;

//   const options = {
//     method: "GET",
//     url: `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchantId}/${merchantTransactionId}`,
//     headers: {
//       accept: "application/json",
//       "Content-Type": "application/json",
//       "X-VERIFY": checksum,
//       "X-MERCHANT-ID": `${merchantId}`,
//     },
//   };

//   // CHECK PAYMENT STATUS
//   axios
//     .request(options)
//     .then(async (response) => {
//       if (response.data.success === true) {
//         const transaction_id = response.data.data.merchantTransactionId;
//         const req_data = await User.findOne({ transaction_id });

//         req_data.payment_status = "SUCCESSFUL";

//         await req_data.save();

//         const url = `http://localhost:3000/pay-success/${transaction_id}`;
//         return res.redirect(url);
//       } else {
//         const url = `http://localhost:3000/register?status=failed`;
//         return res.redirect(url);
//       } 
//     })
//     .catch((error) => { 
//       const url = `http://localhost:3000/register?status=failed`;
//       return res.redirect(url);
//       console.error(error);
//     });
// };

// module.exports = { newPayment, statusCheck };










const crypto = require("crypto");
const axios = require("axios");
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Function to generate a unique transaction ID
function generateTransactionID() {
  const timestamp = Date.now();
  const randomNum = Math.floor(Math.random() * 1000000);
  const merchantPrefix = "T";
  const transactionID = `${merchantPrefix}${timestamp}${randomNum}`;
  return transactionID;
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({ message: "Email or Password not present" });
    }

    // Retrieve user from the database
    const user = await User.findOne({ email });

    // Check if user exists
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Compare passwords
    const result = await bcrypt.compare(password, user.password);

    if (!result) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    // Check payment status
    if (user.payment_status === "SUCCESSFUL") {
      // Generate JWT token
      const maxAge = 2 * 60; // 3hrs in minutes
      const token = jwt.sign(
        { id: user._id, email: user.email, role: user.role },
        process.env.JWTSECRET,
        { expiresIn: maxAge } // 3hrs in sec
      );

      // Set token in cookie
      res.cookie("jwt", token, {
        httpOnly: true,
        maxAge: maxAge * 1000, // 3hrs in ms
      });

      // Send success response
      return res.status(200).json({
        message: "User successfully logged in",
        user: {
          _id: user._id,
          email: user.email,
          role: user.role
        },
        token: token
      });
    } else if (user.payment_status === "PENDING") {
      // Construct payment data
      const data = {
        merchantId: "PGTESTPAYUAT",
        merchantTransactionId: generateTransactionID(),
        merchantUserId: "MUID2QWQEFW5Q6WSER7",
        amount: 100 * 100, // Convert amount to cents
        redirectUrl: "http://localhost:5000/api/phonepe/status/",
        redirectMode: "POST",
        email: user.email,
        password: user.password, // Ensure password security
        paymentInstrument: {
          type: "PAY_PAGE",
        },
      };

      // Convert data to payload and calculate checksum
      const payload = JSON.stringify(data);
      const payloadMain = Buffer.from(payload).toString("base64");
      const keyIndex = 1;
      const string =
        payloadMain + "/pg/v1/pay" + "099eb0cd-02cf-4e2a-8aca-3e6c6aff0399";
      const sha256 = crypto.createHash("sha256").update(string).digest("hex");
      const checksum = sha256 + "###" + keyIndex;

      // Set URL and options for payment request
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

      // Make payment request
      const response = await axios(options);

      // return res.status(200).json({
      //   message: "Payment page URL generated",
      //   paymentPageURL: response.data.data.instrumentResponse.redirectInfo.url
      // });
      return res.status(200).send(response.data.data.instrumentResponse.redirectInfo.url);
    } else {
      // Handle other payment statuses
      return res.status(400).json({ message: "Login not successful" });
    }
  } catch (error) {
    console.error("An error occurred:", error);
    return res.status(500).json({ message: "An error occurred" });
  }
}

module.exports = {login};
