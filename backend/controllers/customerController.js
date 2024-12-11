const jwt = require('jsonwebtoken');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const stripe_test = require('stripe')(process.env.STRIPE_TEST_SECRET_KEY);

const User = require('../models/userModel');

exports.createCustomer = async (req, res) => {
  try {

    const userId = req.body.userId;
    // Retrieve user info from the database (e.g., MongoDB)
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Extract relevant user data
    const { email, username } = user;

    // Validate input
    if (!email || !username) {
      return res.status(400).json({ error: 'Email and Name are required.' });
    }

    // Map username to Stripe's supported fields
    const customerPayload = {
      email, // Use email as-is
      name: username, // Map username to 'name'
      metadata: { username }, // Include username in metadata for reference
    };

    // Create a Stripe customer based on modeType
    const modeType = req.body.modeType || false; // Use modeType from the request body
    const customer =
      modeType === false
        ? await stripe.customers.create(customerPayload)
        : await stripe_test.customers.create(customerPayload);
    return res.json(customer);
  } catch (error) {
    console.error('Error creating customer:', error.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};


const stripeSession = async (plan, modeType) => {
  try {
    if (typeof plan !== "string" || !plan) {
      throw new Error("Invalid plan parameter");
    }
    if (typeof modeType !== "boolean") {
      throw new Error("Invalid modeType parameter");
    }

    const stripeClient = modeType === false ? stripe : stripe_test;
    const priceId = process.env[plan + (modeType ? "_TEST" : "")];

    if (!priceId) {
      throw new Error(`Price ID for ${plan} is not defined in environment variables`);
    }

    const session = await stripeClient.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${process.env.HOST_PATH}/success`,
      cancel_url: `${process.env.HOST_PATH}/cancel`,
    });

    console.log("Stripe session created:", session); // Log to verify the session object
    return session;
  } catch (e) {
    console.error("Stripe session creation failed:", e);
    throw e; // Rethrow the error for the caller to handle
  }
};



exports.createSubscriptionCheckoutSession = async (req, res) => {
  const { plan, modeType } = req.body;
  const userId = req.body.userId;

  try {

    // Generate Stripe session
    const session = await stripeSession(plan, modeType);

    // Fetch user and update stripeSessionId/stripeSessionTestId
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (modeType === false) {
      user.stripeSessionId = session.id;
    } else {
      user.stripeSessionTestId = session.id;
    }

    await user.save();

    // Respond with session and user data
    res.status(200).json({ session, user });
    // console.log("--------session",session);
  } catch (error) {
    console.error("Error creating subscription session:", error);
    res.status(500).json({ error: "Failed to create subscription session", details: error.message });
  }
};


// Handle payment success logic
exports.handlePaymentSuccess = async (req, res) => {
  const { userId, sessionId, modeType } = req.body;
  // console.log("handlePaymentSuccess------------------->", req.body)

  try {
    let session;
    // Fetch session based on modeType (Live or Test)
    if (modeType === false) {
      session = await stripe.checkout.sessions.retrieve(sessionId);
    } else {
      session = await stripe_test.checkout.sessions.retrieve(sessionId);
    }

    // Check if payment was successful
    if (session.payment_status === "paid") {
      const subscriptionId = session.subscription;
      const amount = session.amount_total;

      console.log("---amount", session)

      try {
        let subscription;
        // Retrieve subscription based on modeType (Live or Test)
        if (modeType === false) {
          subscription = await stripe.subscriptions.retrieve(subscriptionId);
        } else {
          subscription = await stripe_test.subscriptions.retrieve(subscriptionId);
        }

        // Determine subscription level based on amount
        let level = 'STARTER'; // Default level
        if (amount >= 3000) {
          level = 'PROFESSIONAL';
        } else if (amount >= 2000) {
          level = 'PREMIUM';
        } else if (amount >= 1000) {
          level = 'BASIC';
        }
        // Find user by userId
        const user = await User.findById(userId);

        // Update user's subscription ID based on modeType (Live or Test)
        if (modeType === false) {
          user.stripeSubscriptionId = subscription.id;
        } else {
          user.stripeSubscriptionTestId = subscription.id;
        }

        user.level = level;

        // Save updated user data
        await user.save();

        // Respond with user and subscription data
        res.send({ user, subscription });
      } catch (error) {
        console.error('Error retrieving subscription:', error);
        res.status(500).send({ message: 'Error retrieving subscription.' });
      }
    } else {
      res.status(400).send({ message: 'Payment not successful.' });
    }
  } catch (error) {
    console.error('Error processing payment:', error);
    res.status(500).send({ message: 'Error processing payment.' });
  }
};

exports.cancelSubscription = async (req, res) => {
  const { userId, reasonCancel } = req.body;

  console.log("first", userId, reasonCancel);

  if (!userId) {
    return res.status(400).json({ error: "User ID are required." });
  }

  try {
    // Fetch the user
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    // Handle cancellation logic (e.g., Stripe API integration)
    const stripeSessionId = user.stripeSessionId;
    if (!stripeSessionId) {
      return res.status(400).json({ error: "No active subscription found for this user." });
    }

    // Update the user's level to BASIC or equivalent
    user.level = "STARTER";
    user.stripeSessionId = null; // Remove the session ID
    await user.save();

    // Return success response
    res.status(200).json({
      message: "Subscription canceled successfully.",
     
    });
  } catch (error) {
    console.error("Error canceling subscription:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};