const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    posts: [Post]!
}

  type Post {
    _id: ID
    postTitle: String!
    postCategory: String!
    postText: String!
    postUser: String!
  }

  type Category {
    _id: ID
    category: String!
    posts: [Post]!
  }

  # input for jobData
  input jobData {
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
    categories: [Category]
    category(category: String!): Category
    getMe(_id: String): User
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    createJob(content: jobData): Post
    acceptJob(content: jobData): Post
    completeJob(content: jobData): Post
    deleteJob(content: jobData): Post
    editJob(content: jobData): Post
  }
`;

module.exports = typeDefs;