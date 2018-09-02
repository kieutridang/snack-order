const typeDefs =`
  type User {
    id: ID
    username: String!
    password: String
    createdAt: String
    updatedAt: String
  }
  type Query {
    user(id: ID): User
    users: [User]!
  }
  type Mutation {
    user (username: String!, password: String): User
  }
`

module.exports = typeDefs;
