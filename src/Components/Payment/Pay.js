import Stripe from "stripe";
const stripe = new Stripe('sk_test_51Hrg6GBIflWeFM0HP1TwysRMtlYUl02Ox4ayocCXEuTC4Pnj4b9SFwXcigI8FEeGuQUoB8QZPd7FfxLQjjvpPEOb00gxW8r0iP');

export default  async (req, res) => {
  if (req.method === "POST") {
    try {
      const { amount } = req.body;
     
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: "usd"
      });

      res.status(200).send(paymentIntent.client_secret);
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};