const { STRING, DATE, BIGINT } = require('sequelize')
const sequelize = require('../sequelize')
const { User } = require('./user')
const { Product } = require('./product')

const Order = sequelize.define('orders', {
  createdAt: {
    type: DATE
  },
  updatedAt: {
    type: DATE
  }
});
Order.belongsTo(User, {
  foreignKey: 'buyer',
  onDelete: 'cascade',
})

const OrderItems = sequelize.define('order_items', {
  quantity: {
    type: BIGINT,
  },
  createdAt: {
    type: DATE
  },
  updatedAt: {
    type: DATE
  }
})

OrderItems.belongsTo(Order, {
  foreignKey: 'orderId',
  onDelete: 'cascade',
  onUpdate: 'cascade',
});
OrderItems.belongsTo(Product, {
  foreignKey: 'productId',
  onUpdate: 'cascade',
})

const result = {
  Order,
  OrderItems,
}
module.exports = result;