const { Product } = require('../schemas/product');

const resolvers = {
  Query: {
    product: async (_, { id }) => {
      try {
        const product = await Product.findById(id)
        return product
      } catch (error) {
        console.log(`${__dirname} Query/product: `, error);
      }
    },
    products: async () => {
      try {
        const products = await Product.findAll()
        return products;
      } catch (error) {
        console.log(`${__dirname} Query/products: `, error);
      }
    }
  },
  Mutation: {
    product: async (_, args) => {
      try {
        const newProduct = await Product.create({
          name: args.name,
          price: args.price,
          image: args.image,
        })
        return newProduct
      } catch (error) {
        console.log(`${__dirname} Mutation/product: `, error);
      }
    }
  } 
}

module.exports = resolvers;
