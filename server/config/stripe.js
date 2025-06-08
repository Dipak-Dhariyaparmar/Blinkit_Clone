import stripe from "stripe";

const Stripe = stripe(process.env.STRIPE_SECRET_KEY);

export default Stripe;
// this component is a related to stripe
