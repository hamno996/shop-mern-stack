const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const KEY = process.env.STRIPE_KEY;
const stripe = require("stripe")(
    "sk_test_51K6eZzBIJCvOxnzbGNj0wykQ3aHY428EieEmQbahpYhdU80eJ9KNRiqIc1X4azsaS3Go1fIEHO1QZlCb3nU6CruS00drh2JZZd"
);

router.post("/payment", (req, res) => {
    stripe.charges.create({
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "usd",
        },
        (stripeErr, stripeRes) => {
            if (stripeErr) {
                res.status(500).json(stripeErr);
            } else {
                res.status(200).json(stripeRes);
            }
        }
    );
});

module.exports = router;