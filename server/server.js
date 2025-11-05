require('dotenv').config();
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connect = require('./configs/db');
const { authRoute, userRoute, gigRoute } = require('./routes');
require('dotenv').config();

const PORT = process.env.PORT || 8080;

// App
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(compression());
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:4173'],
    credentials: true
}));

// Example Route
app.use("/", (request, response) => response.send('Hello world'));

// Other Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("api/gigs", gigRoute);


app.listen(PORT, async () => {
    try {
        await connect();
        console.log(`Listening at http://localhost:${PORT}`);
    } catch ({ message }) {
        console.log(message)
    }
});

