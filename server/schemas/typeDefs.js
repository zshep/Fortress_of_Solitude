const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    posts: [Post]!
    post: [Post]!
}

  type Post {
    _id: ID
    postTitle: String!
    postCategory: Category
    postText: String!
    postUser: String!
  }

  type Category {
    _id: ID
    category: String!
    posts: [Post]!
  }

  # Queries
  type Query {
    users: [User]
    user(username: String!): User
    posts: [Post]
    post(_id: String!): Post
    categories: [Category]
    category(category: String!): Category
    getMe: User
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    createJob(jobData: String!): Post
    acceptJob(jobData: String): Post
    completeJob(jobData: String): Post
    deleteJob(jobData: String): Post
    editJob(jobData: String): Post
  }
`;

module.exports = typeDefs;