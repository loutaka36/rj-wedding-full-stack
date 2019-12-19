const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('guest', {
  name: {
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
