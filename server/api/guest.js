const express = require('express');
const router = express.Router();
const {Guest} = require('../db');

//routes for /api/guest

const createFetchError = (message) => {
  const err = new Error(message);
  err.status = 404;
  return err;
}

router.get('/name/:name', async (req, res, next) => {
  const name = req.params.name.split('_');
  try {
    const guest = await Guest.findOne({
      where: {
        firstName: name[0],
        lastName: name[1]
      }
    });
    if (guest) {
      res.json(guest);
    } else {
      next(createFetchError('Your name was not found'))
    }
  } catch (err) {
    next(err);
  }
});

router.get('/group/:groupId', async (req, res, next) => {
  try {
    const group = await Guest.findAll({
      where: {
        groupId: req.params.groupId
      }
    });
    res.json(group);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
