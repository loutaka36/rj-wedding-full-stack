const express = require('express');
const router = express.Router();

router.use('/guest', require('./guest'));

module.exports = router;
