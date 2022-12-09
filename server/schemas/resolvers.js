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
    posts: async (parent, { username, category }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (username) {
        params.username = username;
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
    //---------working on finishing mutations--------

    createJob: async (parent, args) => {
      const newjob = await Post.create(args);
      return newjob;
    },

    acceptJob: async (parent, {}) => {
      const acceptjob = await User.findOneAndUpdate(
       // need to update user who accepted the job
        { _id },
        // {}  needs another parameter
        { new: true } 
      
        );

      return acceptjob;
    },

    completeJob: async (parent, {}) => {
      const job = await User.findOneAndUpdate(
          // need to update user who accepted the job
          { _id },
          // {}  needs another parameter
          { new: true } 
         );

      return {};
    },

    deleteJob: async (parent, {}) => {
      const job = await User.updateOne({
       // need to update user who accepted the job 
      })

      return {};
    },
    editJob: async (parent, {}) => {
      const job = await User.updateOne({
       // need to update user who accepted the job 
      })

      return {};
    },
    

  },
};

module.exports = resolvers;
