const express = require('express');
const router = express.Router();
const { createCustomer } = require('../controllers/customerController');
const { createSubscriptionCheckoutSession } = require("../controllers/customerController");
const {handlePaymentSuccess} =require("../controllers/customerController");

// POST route for creating a customer
router.post('/create-customer', createCustomer);
router.post("/create-subscription-checkout-session", createSubscriptionCheckoutSession);
router.post("/payment-success",handlePaymentSuccess );

module.exports = router;
