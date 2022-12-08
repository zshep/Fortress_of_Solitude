const { User, Post, Category } = require("../models");
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
    posts: async () => {
      return Post.find();
    },
    post: async (parent, { _id }) => {
      return await Post.findById(_id);
    },
    categories: async () => {
      return await Category.find();
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      // const correctPw = await user.isCorrectPassword(password);

      // if (!correctPw) {
      //   throw new AuthenticationError("Incorrect credentials");
      // }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
