const Sequelize = require('sequelize');
const db = new Sequelize(
  process.env.DATABASE_URL ||
  'postgres://localhost:5432/wedding', {
    logging: false,
    "dialect": "postgres",
    "ssl": true,
    "dialectOptions": {
      "ssl": {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
);

module.exports = db;
