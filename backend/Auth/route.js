const express = require("express")
const router = express.Router()
// const { register, payment} = require("./register")
const { login  } = require("./login")
const leadController = require("../controllers/leadController")
const { adminAuth } = require("../middleware/auth")
// const { newPayment, statusCheck } = require("../controllers/paymentphoneController");

const { addUser } = require("../Auth/register")


const userRouter = require("express").Router();

// router.route("/register").post(register)
router.route("/login").post(login)

// POST /leads - Create a new lead
router.post('/', leadController.createLead);

// GET /leads - Get all leads
router.get('/', leadController.getAllLeads);

// DELETE /leads/:id - Delete a lead by ID
router.delete('/:id', leadController.deleteLeadById);


// router.route("/payment").get(payment)

// router.route("/payment").post(newPayment)
// router.route('/status').post(statusCheck);

router.route("/user").post(addUser)


module.exports = router


module.exports.userRouter = userRouter;