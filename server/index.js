const express = require('express');
const path = require('path');
const morgan = require('morgan');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const {db} = require('./db');
const sessionStore = new SequelizeStore({db});
const apiRouters = require('./api');
const authRouters = require('./auth');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '/../client/build')));

app.use(
  session({
    secret: process.env.SESSION_SECRET || 'hello my friend',
    store: sessionStore,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 86400000
    }
  })
)

app.use('/api', apiRouters);
app.use('/auth', authRouters);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/build/index.html'));
});

app.use((err, req, res, next) =>
  res.status(err.status || 500).send(err.message || 'Internal server error.')
);

module.exports = app;
