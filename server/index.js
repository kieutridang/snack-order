const { GraphQLServer } = require('graphql-yoga')
const resolvers = require('./resolvers')
const typeDefs = require('./typeDefs')

const options = {
  port: 4000,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground',
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(options, (options) => {
  console.log(`Server is listening at port ${options.port}`);
})
