const Sequelize = require('sequelize');
const db = require('../index');
const student = require('./student');

module.exports = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'http://www.travelcaffeine.com/wp-content/uploads/2017/10/bradbury-building-blade-runner-los-angeles-california-318.jpg'
  },
  description: Sequelize.TEXT
});
