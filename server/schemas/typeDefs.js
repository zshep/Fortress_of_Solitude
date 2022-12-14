const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    posts: [Post]!
    ppLevel: Int!
}

  type Post {
    _id: ID
    postTitle: String
    postCategory: categoryChoices
    postText: String
    postUser: String
    postStatus: String
    createdAt: String
  }

  type Category {
    _id: ID
    category: categoryChoices!
    posts: [Post]!
  }

  # input for jobData
  input jobData {
    postTitle: String
    postCategory: String
    postText: String
    postUser: String
    postStatus: String
    userId: String
    postId: String
  }

enum categoryChoices {
YardWork
Automotive
PetCare
HomeMaintenance
Housekeeping
Cooking
Technology
Other
}

  # Queries
  type Query {
    users: [User]
    user(_id: ID!): User
    posts: [Post]
    post(_id: ID!): Post
    categories: [Category]
    category(category: String!): Category
    getMe(_id: ID): User
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    newUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String!, email: String!, password: String!): User
    deleteUser(username: String!, email: String!, password: String!): User
    createJob(input: jobData): Post
    acceptJob(content: jobData): Post
    completeJob(content: jobData): Post
    deleteJob(content: jobData): Post
    editJob(content: jobData): Post
  }
`;

module.exports = typeDefs;