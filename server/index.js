const express = require('express');
const path = require('path');
const morgan = require('morgan');
const apiRouters = require('./api');
const authRouters = require('./auth');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, './../client/build')));

app.use('/api', apiRouters);
app.use('/auth', authRouters);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'./../client/build/index.html'));
});

app.use((err, req, res, next) =>
  res.status(err.status || 500).send(err.message || 'Internal server error.')
);

module.exports = app;
