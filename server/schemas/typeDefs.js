const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    PP: INT
}
# Query    
type Query {
    users: [User]
    user(username: String!): User
    }
    
# Mutation {
    login(email: String!, password: String!): Auth
}
`;





module.exports = typeDefs;