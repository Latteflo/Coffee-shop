const functions = require("firebase-functions");
const stripe = require("stripe")(functions.config().stripe.secret);

exports.createCheckoutSession = functions.https.onCall(
    async (data, context) =>{
      const {productName, amount, quantity} = data;

      try {
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ["card"],
          line_items: [
            {
              price_data: {
                currency: "eur",
                product_data: {name: productName},
                unit_amount: amount,
              },
              quantity: quantity,
            },
          ],
          mode: "payment",
          success_url: "./success",
          cancel_url: "./cancel",
        });
        return {sessionId: session.id};
      } catch (error) {
        throw new functions.https.HttpsError("internal", error.message);
      }
    },
);
