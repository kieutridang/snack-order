const { User } = require('./schema');

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
    user: (_, { id }) => {
      return User.findById(id)
        .then((user) => {
          return user
      }, (err) => {
        console.log(err)
      })
    },
    users: (_, args) => {
      return User.findAll()
        .then((users) =>  {
          return users
        }, (err) => {
          console.log(err)
        })
    }
  },
  Mutation: {
    user: (_, args) => {
      return User.create({
        username: args.username,
        password: args.password,
      }).then((user) => {
        return user
      }, (err) => {
        console.log(err)
      })
    }
  } 
}

module.exports = resolvers;
