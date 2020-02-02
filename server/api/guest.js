const express = require('express');
const router = express.Router();
const {Guest} = require('../db');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
//routes for /api/guest

const isAuthenticated = (req, res, next) => {
  if (req.session.time) {
    next();
  } else {
    res.status(401).send('forbidden');
  }
}

const createFetchError = (message) => {
  const err = new Error(message);
  err.status = 404;
  return err;
}

router.get('/name/:name', isAuthenticated, async (req, res, next) => {
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

router.get('/group/:groupId', isAuthenticated, async (req, res, next) => {
  try {
    const group = await Guest.findAll({
      where: {
        groupId: req.params.groupId
      },
      order: [
        ['id', 'ASC']
      ]
    });
    res.json(group);
  } catch (err) {
    next(err);
  }
});

router.put('/rsvp', async (req, res, next) => {
  let submissions = req.body.submissions;
  let accept = [];
  let decline = [];
  let accepted = [];
  let declined = [];
  let ids = Object.keys(submissions)

  try {
    for (let id of ids) {
      if (submissions[id].attendence === 'accept') {
        submissions[id].id = Number(id);
        accept.push(submissions[id]);
      } else {
        submissions[id].id = Number(id)
        decline.push(submissions[id])
      }
    }

    for (let guest of accept) {
      const resArr = await Guest.update({
        attendence: 'accept',
        entree: guest.entree,
        restrictions: guest.restrictions
      },
      {
        where: {
          id: guest.id
        },
        returning: true,
        plain: true
      })
      accepted.push(resArr[1])
    }

    for (let guest of decline) {
      const resArr = await Guest.update({
        attendence: 'decline',
        entree: null,
        restrictions: null
      },
      {
        where: {
          id: guest.id
        },
        returning: true,
        plain: true
      })
      declined.push(resArr[1])
    }

    res.json({
      accepted,
      declined
    })
  } catch (err) {
    next(err);
  }
});

module.exports = router;
