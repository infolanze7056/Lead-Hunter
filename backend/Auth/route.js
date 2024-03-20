const express = require("express")
const router = express.Router()
const { register} = require("./register")
const { login  } = require("./login")
const { User, validate } = require("../model/User")


router.route("/register").post(register)
router.route("/login").post(login)



module.exports = router