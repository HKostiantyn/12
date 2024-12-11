const express = require('express');
const router = express.Router();

const { createSubscriptionCheckoutSession,cancelSubscription,createCustomer ,handlePaymentSuccess} = require("../controllers/customerController");

// POST route for creating a customer
router.post('/create-customer', createCustomer);
router.post("/create-subscription-checkout-session", createSubscriptionCheckoutSession);
router.post("/payment-success",handlePaymentSuccess );
router.post("/cancelSubscription", cancelSubscription);

module.exports = router;
