const express = require('express');
const { createReview, getReview, deleteReview, getAllReviews } = require('../controllers/review.controller');
const { userMiddleware } = require('../middlewares');

const app = express.Router();

app.get('/', userMiddleware, getAllReviews)

// Create
app.post('/', userMiddleware, createReview);

// Get single
app.get('/:gigID', getReview);

// Delete
app.delete('/:_id', userMiddleware, deleteReview);

module.exports = app;