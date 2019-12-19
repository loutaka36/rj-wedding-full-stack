const express = require('express');
const router = express.Router();
const {encode} = require('../../scripts');

const createAuthError = () => {
  const err = new Error('Incorrect invite code');
  err.status = 401;
  return err;
}

//for expression session. Need to implement session store first. todo
// router.get('/access', (req, res, next) => {

// });

router.put('/access', (req, res, next) => {
  if (encode(req.body.inviteCode) === '993715cafa4258018357cd2fe4ba1f94') {
    res.sendStatus(200);
  } else {
    next(createAuthError());
  }
});

module.exports = router;
