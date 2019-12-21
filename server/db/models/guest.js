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
  attendence: {
    type: Sequelize.ENUM('accept', 'decline', 'pending'),
    defaultValue: 'pending'
  },
  entree: {
    type: Sequelize.ENUM('steak', 'salmon', 'vegetarian'),
    defaultValue: null
  },
  restrictions: {
    type: Sequelize.TEXT,
    defaultValue: null
  },
  groupId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});
