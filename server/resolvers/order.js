const { Order, OrderItems } = require('../schemas/order');
const { User } = require('../schemas/user');
const { Product } = require('../schemas/product');
const Sequelize = require('sequelize');

async function createOrderItems(orderId, products) {
  const promises = [];

  products.forEach((product) => {
    promises.push(OrderItems.create({
      orderId,
      productId: product.product,
      quantity: product.quantity,
    }));
  });

  return Sequelize.Promise.all(promises);
}

const resolvers = {
  Order: {
    buyer: async (parent, _) => {
      try {
        const buyer = await User.findById(parent.buyer);
        return buyer;
      } catch (error) {
        console.log(`${__dirname} Order/buyer: `, error);
      }
    },
  },
  Order_Items: {
    order: async (parent, _) => {
      try {
        const order = await Order.findById(parent.order);
        return order;
      } catch (error) {
        console.log(`${__dirname} Order_Items/order: `, error);
      }
    },
    product: async (parent, _) => {
      try {
        const product = await Product.findById(parent.productId);
        return product;
      } catch (error) {
        console.log(`${__dirname} Order_Items/order: `, error);
      }
    }
  },
  Mutation: {
    createOrder: async (_, args) => {
      try {
        const products = args.products;
        debugger
        const newOrder = await Order.create({
          buyer: args.buyer,
        })
        const newOrderItems = await createOrderItems(newOrder.id, products)
        const result = {
          order: newOrder,
          orderItems: newOrderItems,
        }
        return result
      } catch (error) {
        console.log(`${__dirname} Mutation/createOrder: `, error);
      }
    },
    deleteOrder: async (_, args) => {
      try {
        const deletedOrder = await Order.destroy({ 
          where: { 
            id: args.id 
          }
        });
        debugger
        return 'Order is deleted';
      } catch (error) {
        console.log(`${__dirname} Mutation/deleteOrder: `, error);
        return error.message;
      }
    }
  },
  Query: {
    order: async(_, args) => {
      try {
        const order = await Order.findById(args.id);
        const orderItems = await OrderItems.findAll({ where: { orderId: args.id }});
        return {
          order,
          orderItems,
        };
      } catch (error) {
        console.log(`${__dirname} Query/order`, error);
      }
    },
    orderItems: async(_, args) => {
      try {
        const orderItems = await OrderItems.findById(args.id);
        return orderItems;
      } catch (error) {
        console.log(`${__dirname} Query/order_item`, error);
      }
    }
  }
}

module.exports = resolvers;