const { STRING, DATE, INTEGER } = require('sequelize')
const sequelize = require('../sequelize')

const Product = sequelize.define('products', {
  name: {
    type: STRING
  },
  price: {
    type: INTEGER
  },
  image: {
    type: STRING
  },
  createdAt: {
    type: DATE
  },
  updatedAt: {
    type: DATE
  }
});

module.exports.Product = Product;