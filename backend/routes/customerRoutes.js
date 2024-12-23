import express from 'express';
import { createSubscriptionCheckoutSession, cancelSubscription, createCustomer, handlePaymentSuccess } from "../controllers/customerController.js";

const router = express.Router();

// POST route for creating a customer
router.post('/create-customer', createCustomer);
router.post("/create-subscription-checkout-session", createSubscriptionCheckoutSession);
router.post("/payment-success", handlePaymentSuccess);
router.post("/cancelSubscription", cancelSubscription);

export default router;
