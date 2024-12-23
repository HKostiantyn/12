// Import dependencies using ES module syntax
import Stripe from 'stripe';
import User from '../models/userModel.js';
import dotenv from 'dotenv';
dotenv.config();
// Initialize Stripe clients
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const stripe_test = new Stripe(process.env.STRIPE_TEST_SECRET_KEY);

if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_TEST_SECRET_KEY) {
  throw new Error('Stripe API keys are missing in the environment variables.');
}

export const createCustomer = async (req, res) => {
  try {
    const userId = req.body.userId;
    // Retrieve user info from the database
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const { email, username } = user;

    if (!email || !username) {
      return res.status(400).json({ error: 'Email and Name are required.' });
    }

    const customerPayload = {
      email,
      name: username,
      metadata: { username },
    };

    const modeType = req.body.modeType || false;
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
    if (typeof plan !== 'string' || !plan) {
      throw new Error('Invalid plan parameter');
    }
    if (typeof modeType !== 'boolean') {
      throw new Error('Invalid modeType parameter');
    }

    const stripeClient = modeType === false ? stripe : stripe_test;
    const priceId = process.env[plan + (modeType ? '_TEST' : '')];

    if (!priceId) {
      throw new Error(`Price ID for ${plan} is not defined in environment variables`);
    }

    const session = await stripeClient.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${process.env.HOST_PATH}/success`,
      cancel_url: `${process.env.HOST_PATH}/cancel`,
    });

    console.log('Stripe session created:', session);
    return session;
  } catch (e) {
    console.error('Stripe session creation failed:', e);
    throw e;
  }
};

export const createSubscriptionCheckoutSession = async (req, res) => {
  const { plan, modeType } = req.body;
  const userId = req.body.userId;

  try {
    const session = await stripeSession(plan, modeType);

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (modeType === false) {
      user.stripeSessionId = session.id;
    } else {
      user.stripeSessionTestId = session.id;
    }

    await user.save();

    res.status(200).json({ session, user });
  } catch (error) {
    console.error('Error creating subscription session:', error);
    res.status(500).json({ error: 'Failed to create subscription session', details: error.message });
  }
};

export const handlePaymentSuccess = async (req, res) => {
  const { userId, sessionId, modeType } = req.body;

  try {
    let session;
    if (modeType === false) {
      session = await stripe.checkout.sessions.retrieve(sessionId);
    } else {
      session = await stripe_test.checkout.sessions.retrieve(sessionId);
    }

    if (session.payment_status === 'paid') {
      const subscriptionId = session.subscription;
      const amount = session.amount_total;

      try {
        let subscription;
        if (modeType === false) {
          subscription = await stripe.subscriptions.retrieve(subscriptionId);
        } else {
          subscription = await stripe_test.subscriptions.retrieve(subscriptionId);
        }

        let level = 'STARTER';
        if (amount >= 3000) {
          level = 'PROFESSIONAL';
        } else if (amount >= 2000) {
          level = 'PREMIUM';
        } else if (amount >= 1000) {
          level = 'BASIC';
        }

        const user = await User.findById(userId);

        if (modeType === false) {
          user.stripeSubscriptionId = subscription.id;
        } else {
          user.stripeSubscriptionTestId = subscription.id;
        }

        user.level = level;

        await user.save();

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

export const cancelSubscription = async (req, res) => {
  const { userId, reasonCancel } = req.body;

  if (!userId) {
    return res.status(400).json({ error: 'User ID is required.' });
  }

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    const stripeSessionId = user.stripeSessionId;
    if (!stripeSessionId) {
      return res.status(400).json({ error: 'No active subscription found for this user.' });
    }

    user.level = 'STARTER';
    user.stripeSessionId = null;
    await user.save();

    res.status(200).json({ message: 'Subscription canceled successfully.' });
  } catch (error) {
    console.error('Error canceling subscription:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
