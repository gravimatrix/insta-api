const express = require('express');
const router =  express.Router();
const User = require('../models/user');
//Get users

router.get('/', async (req, res, next) => {
    const users = await User.find();
    console.log(users);
    res.send(users);
});

module.exports = router;