const express = require("express")
const router = express.Router()
const { register} = require("./register")
const { login  } = require("./login")
const leadController = require("../controllers/leadController")
const { adminAuth } = require("../middleware/auth")


router.route("/register").post(register)
router.route("/login").post(login)

// POST /leads - Create a new lead
router.post('/', leadController.createLead);

// GET /leads - Get all leads
router.get('/', leadController.getAllLeads);

// DELETE /leads/:id - Delete a lead by ID
router.delete('/:id', leadController.deleteLeadById);


module.exports = router