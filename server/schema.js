const { STRING, BIGINT, DATE } = require('sequelize')
const sequelize = require('./sequelize')

const User = sequelize.define('users', {
  id: {
    type: BIGINT,
    primaryKey: true,
  },
  username: {
    type: STRING
  },
  password: {
    type: STRING
  },
  createdAt: {
    type: DATE
  },
  updatedAt: {
    type: DATE
  }
});

module.exports.User = User;