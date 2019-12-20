const express = require('express');
const router = express.Router();
const {Guest} = require('../db');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
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

router.put('/rsvp', async (req, res, next) => {
  const accept = req.body.accept.map(id => Number(id));
  const decline = req.body.decline.map(id => Number(id));
  let accepted = null;
  let declined = null;
  try {
    if (accept.length > 0) {
      accepted = await Guest.update({
        isAttending: 'accept'
      }, {
        where: {
          id: {
            [Op.in]: accept
          }
        },
        returning: true,
        plain: true
      })
      accepted = accepted[1];
    }

    if (decline.length > 0) {
      declined = await Guest.update({
        isAttending: 'decline'
      }, {
        where: {
          id: {
            [Op.in]: decline
          }
        },
        returning: true,
        plain: true
      })
      declined = declined[1]
    }
    res.json({
      accept: accepted,
      decline: declined
    })
  } catch (err) {
    next(err);
  }
});

module.exports = router;
