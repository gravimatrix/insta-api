const express = require('express');
const router =  express.Router();
const connection = require('../connect');

router.get('/', (req, res, next) => {
    connection.query('SELECT * FROM user', (err, results, fields) => {
        !err ? res.json({results}) : res.json({err});
    });
});

module.exports = router;