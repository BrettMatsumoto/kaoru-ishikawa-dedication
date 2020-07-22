'use strict';

const express = require('express');
const router = express.Router();
const kenx = require('../database');

router.get('/', (req, res) => {
    return res.render('home.hbs')
})

module.exports = router;