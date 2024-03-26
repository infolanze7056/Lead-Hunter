const crypto = require('crypto');
const axios = require('axios');
const { User } = require('../model/User.js');

function generateTransactionID() {
  const timestamp = Date.now();
  const randomNum = Math.floor(Math.random() * 1000000);
  const merchantPrefix = 'T';
  const transactionID = `${merchantPrefix}${timestamp}${randomNum}`;
  return transactionID;
}

async function newPayment(req, res) {
  console.log(req.body);
  try {
    const { name, phone_number, email, amount } = req.body;
    console.log(name, phone_number);

    // Validate the incoming data
    if (!name || !phone_number || !email || !amount) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    // Generate transaction ID
    const merchantTransactionId = generateTransactionID();

    // Your payment data creation goes here...

    // Example payment data
    const data = {
      merchantId: 'PGTESTPAYUAT',
      merchantTransactionId: merchantTransactionId,
      merchantUserId: 'MUID2QWQEFW5Q6WSER7',
      name: name,
      amount: amount * 100, // Convert amount to cents
      redirectUrl: 'http://localhost:3000/api/phonepe/status/',
      redirectMode: 'POST',
      mobileNumber: phone_number,
      paymentInstrument: {
        type: 'PAY_PAGE',
      },
    };

    // Checksum calculation and payment request code...
  } catch (error) {
    res.status(500).send({
      message: error.message,
      success: false,
    });
  }
}

async function statusCheck(req, res) {
  const merchantTransactionId = res.req.body.transactionId;
  const merchantId = res.req.body.merchantId;

  const keyIndex = 1;
  const string = `/pg/v1/status/${merchantId}/${merchantTransactionId}` + '099eb0cd-02cf-4e2a-8aca-3e6c6aff0399';
  const sha256 = crypto.createHash('sha256').update(string).digest('hex');
  const checksum = sha256 + '###' + keyIndex;

  const options = {
    method: 'GET',
    url: `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchantId}/${merchantTransactionId}`,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      'X-VERIFY': checksum,
      'X-MERCHANT-ID': `${merchantId}`,
    },
  };

  // CHECK PAYMENT STATUS
  axios
    .request(options)
    .then(async (response) => {
      if (response.data.success === true) {
        const transaction_id = response.data.data.merchantTransactionId;
        const req_data = await User.findOne({ transaction_id });

        req_data.payment_status = 'SUCCESSFUL';

        await req_data.save();

        const url = `http://localhost:3000/pay-success?transaction_id=${transaction_id}`;
        return res.redirect(url);
      } else {
        const url = 'http://localhost:3000/register?status=failed';
        return res.redirect(url);
      }
    })
    .catch((error) => {
      const url = 'http://localhost:3000/register?status=failed';
      return res.redirect(url);
      console.error(error);
    });
}

module.exports = { newPayment, statusCheck };
