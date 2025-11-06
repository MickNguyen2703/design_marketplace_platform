const userRoute = require('./user.route');
const gigRoute = require('./gig.route');
const authRoute = require('./auth.route');
const orderRoute = require("./order.route");
const reviewRoute = require("./review.route");

module.exports = {
    authRoute,
    userRoute,
    gigRoute,
    orderRoute,
    reviewRoute
}