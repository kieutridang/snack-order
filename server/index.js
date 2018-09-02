const { GraphQLServer } = require('graphql-yoga')
const resolvers = require('./resolvers')
const path = require('path');
const { mergeResolvers, mergeTypes, fileLoader } = require("merge-graphql-schemas");


const options = {
  port: 4000,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground',
}

const typeArray = fileLoader(path.join(__dirname, './typeDefs/*'))
const typeDefs = mergeTypes(typeArray);

const server = new GraphQLServer({ 
  typeDefs,
  resolvers
})
server.start(options, (options) => {
  console.log(`Server is listening at port ${options.port}`);
})
