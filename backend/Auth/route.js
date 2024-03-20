const express = require("express")
const router = express.Router()
const { register} = require("./register")
const { login  } = require("./login")
// const { User, validate } = require("../model/User")
const leadController = require("../controllers/leadController")


router.route("/register").post(register)
router.route("/login").post(login)

// POST /leads - Create a new lead
router.post('/', leadController.createLead);

// GET /leads - Get all leads
router.get('/', leadController.getAllLeads);




module.exports = router