const { User, Post, Category } = require("../models");
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('posts');
    },
    posts: async (parent, { _id, username, category }) => {
      const params = {};

      if (_id) {
        params._id = _id;
      }

      if (username) {
        params.username = username;
      }

      if (category) {
        params.category = category;
      }

      return Post.find(params);
    },
    post: async (parent, { _id }) => {
      return await Post.findById(_id);
    },
    categories: async () => {
      return await Category.find();
    },
    category: async (parent, { category }) => {
      return Category.findOne({ category }).populate('posts');
    },
    getMe: async (parent, args, context) => {
      if (context.user) {
        const meUser = await User.findOne({ _id: context.user._id }).populate('posts');
        return meUser;
      }
      throw new AuthenticationError("You need to be logged in");
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
