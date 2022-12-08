const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String!
    email: String!
    password: String!
}

type Post {
    _id: ID
    postTitle: String!
    postCategory: String!
    postText: String!
    postUser: String!
}

# Queries
type Query {
    users: [User]
    user(username: String!): User
    posts: [Post]
    post(_id: String!): Post
    }
    
type Auth {
    token: ID
    user: User
}
type Mutation {
    login(email: String!, password: String!): Auth
}
`;





module.exports = typeDefs;