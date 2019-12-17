const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'client/build')));

//put routes here

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.use((err, req, res, next) =>
  res.status(err.status || 500).send(err.message || 'Internal server error.')
);

module.exports = app;
