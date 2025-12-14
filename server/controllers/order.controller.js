const { Order, Gig } = require("../models");
const { CustomException } = require("../utils");


const getOrders = async (request, response) => {
    try {
        const orders = await Order.find({
            $and: [{
                $or: [{ sellerID: request.userID }, { buyerID: request.userID }]
            }, {
                isCompleted: true

            }]
        }).populate(request.isSeller ? 'buyerID' : 'sellerID', 'username email image country');
        return response.send(orders);
    } catch ({ message, status = 500 }) {
        return response.send({
            error: true,
            message
        })
    }
}

const paymentIntent = async (request, response) => {
    const { _id } = request.params;
    console.log("paymentIntent hit with ID:", _id);
    try {
        if (request.isSeller === true) {
            throw CustomException("Seller can't order gig", 403)
        }

        const gig = await Gig.findOne({ _id });

        const stripeKey = process.env.STRIPE;
        if (!stripeKey) {
            throw CustomException("Stripe key missing in server environment", 500);
        }
        const stripe = require("stripe")(stripeKey);

        const payment_intent = await stripe.paymentIntents.create({
            amount: gig.price * 100,
            currency: "INR",
            automatic_payment_methods: {
                enabled: true,
            },
        });

        const order = new Order({
            gigID: gig._id,
            image: gig.cover,
            title: gig.title,
            buyerID: request.userID,
            sellerID: gig.userID,
            price: gig.price,
            payment_intent: payment_intent.id
        });

        await order.save();
        console.log("Order saved, returning clientSecret:", payment_intent.client_secret);
        return response.send({
            error: false,
            clientSecret: payment_intent.client_secret
        })

    }
    catch ({ message, status = 500 }) {
        console.error("paymentIntent Error:", message);
        return response.send({
            error: true,
            message
        })
    }
}

const updatePaymentStatus = async (request, response) => {
    const { payment_intent } = request.body;

    try {
        const order = await Order.findOneAndUpdate({ payment_intent }, {
            $set: {
                isCompleted: true
            }
        }, { new: true });

        if (order?.isCompleted) {
            return response.status(202).send({
                error: false,
                message: 'Order has been confirmed!'
            })
        }

        throw CustomException('Payment status not updated!', 500);
    }
    catch ({ message, status = 500 }) {
        return response.status(status).send({
            error: true,
            message
        })
    }
}

module.exports = {
    getOrders,
    paymentIntent,
    updatePaymentStatus
}