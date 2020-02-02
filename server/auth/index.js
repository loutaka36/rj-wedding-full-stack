const express = require('express');
const router = express.Router();
const {encode} = require('../../scripts');

//routes for /auth

const createAuthError = () => {
  const err = new Error('Incorrect invite code');
  err.status = 401;
  return err;
}

router.get('/me', (req, res) => {
  res.json(req.session.time)
})

router.put('/access', (req, res, next) => {
  if (encode(req.body.inviteCode) === process.env.INVITE_CODE) {
    const now = new Date()
    req.session.time = now.getTime()
    console.log(req.session)
    res.sendStatus(200);
  } else {
    next(createAuthError());
  }
});

module.exports = router;
