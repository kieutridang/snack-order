const { User } = require('./schema');

const resolvers = {
  Query: {
    user: async (_, { id }) => {
      const user = await User.findById(id)
      return user
    },
    users: async () => {
      const users = await User.findAll()
      return users;
    }
  },
  Mutation: {
    user: async (_, args) => {
      const newUser = await User.create({
        username: args.username,
        password: args.password,
      })
      return newUser
    }
  } 
}

module.exports = resolvers;
