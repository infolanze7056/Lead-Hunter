const express = require("express")
const router = express.Router()
const { register} = require("./register")
const { login  } = require("./login")



router.route("/register").post(register)
router.route("/login").post(login)


module.exports = router