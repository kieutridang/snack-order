const { STRING, DATE, BIGINT } = require('sequelize')
const sequelize = require('../sequelize')
const { User } = require('./user')
const { Product } = require('./product')

const Order = sequelize.define('orders', {
  buyer: {
    type: BIGINT,
    references: {
      model: User,
      key: 'id',
      deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE,
    }
  },
  createdAt: {
    type: DATE
  },
  updatedAt: {
    type: DATE
  }
});

const OrderItems = sequelize.define('order_items', {
  order: {
    type: BIGINT,
    references: {
      model: Order,
      key: 'id',
      deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  product: {
    type: BIGINT,
    references: {
      model: Product,
      key: 'id',
      deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE,
    }
  },
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

const result = {
  Order,
  OrderItems,
}
module.exports = result;