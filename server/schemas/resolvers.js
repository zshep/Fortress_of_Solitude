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
    posts: async (parent, { username, category, _id }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (username) {
        params.username = username;
      }

      if (_id) {
        params._id = _id;
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
    newUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, { username, email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Cannot find a user with that email");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password");
      }


      user.username = username;
      user.email = email;
      user.password = password;

      return user.save();
    },
    deleteUser: async (parent, { username, email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Cannot find a user with that email");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password");
      }

      console.log("This user has been deleted");
      return user.delete();
    },
    //---------working on finishing mutations--------

    createJob: async (parent, args) => {
      const newjob = await Post.create(args);
      return newjob;
    },

    acceptJob: async (parent, { }) => {
      const acceptjob = await User.findOneAndUpdate(
        // need to update user who accepted the job
        { _id },
        // {}  needs another parameter
        { new: true }

      );

      return acceptjob;
    },

    completeJob: async (parent, { }) => {
      const job = await User.findOneAndUpdate(
        // need to update user who accepted the job
        { _id },
        // {}  needs another parameter
        { new: true }
      );

      return {};
    },

    deleteJob: async (parent, { }) => {
      const job = await User.updateOne({
        // need tofind one and delete 
      })

      return {};
    },
    editJob: async (parent, { }) => {
      const job = await Post.findOneAndUpdate(
        // need to update the post 
        { _id: context.post._id},
        //how to specifically update the things
        {new: true}
        )

      return job;
    },


  },
};

module.exports = resolvers;
