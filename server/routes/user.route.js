const express = require('express');
const { userMiddleware } = require('../middlewares');
const { deleteUser } = require('../controllers/user.controller');

const { User } = require('../models');
const { CustomException } = require('../utils');

const app = express.Router();

// test user
app.get('/', async (req, res) => {
    const user = await User.find();
    return res.status(200).json({ user })

})

app.delete('/:_id', userMiddleware, deleteUser);

module.exports = app;