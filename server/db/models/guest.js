const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('guest', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  isAttending: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  groupId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});
