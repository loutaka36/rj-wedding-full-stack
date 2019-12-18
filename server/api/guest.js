const express = require('express');
const router = express.Router();
const {Guest} = require('../db');

router.use('/', async (req, res, next) => {
  try {
    const guests = await Guest.findAll();
    res.json(guests);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
