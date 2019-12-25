const express = require('express');
const router = express.Router();
const {encode} = require('../../scripts');

//routes for /auth

const createAuthError = () => {
  const err = new Error('Incorrect invite code');
  err.status = 401;
  return err;
}

//for expression session. Need to implement session store first. todo
// router.get('/access', (req, res, next) => {

// });

router.put('/access', (req, res, next) => {
  if (encode(req.body.inviteCode) === process.env.INVITE_CODE) {
    res.sendStatus(200);
  } else {
    next(createAuthError());
  }
});

module.exports = router;
