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
    user: async (parent, { _id }) => {
      return User.findOne({ _id }).populate('posts');
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
        throw new AuthenticationError("The email you entered did not match our records.");
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
        throw new AuthenticationError("The email you entered did not match our records.");
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
        throw new AuthenticationError("The email you entered did not match our records.");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password");
      }

      console.log("This user has been deleted");
      return user.delete();
    },
    //---------working on finishing mutations--------


    createJob: async (parent, { postTitle, postCategory, postText, postUser }) => {
      const newjob = await Post.create({ postTitle, postCategory, postText, postUser });
      return newjob;
    },

    acceptJob: (parent, { _id, post}) => { 
      const job = find(post, { id: postId }); 
      if (!post) {
        throw new Error(`Couldnt find job with id ${postId}`);
      }
      post.postStatus = ASSIGNED; 

      return job;
     },


     completeJob: (parent, { _id, post}) => { 
      const job = find(post, { id: postId }); 
      if (!post) {
        throw new Error(`Couldnt find job with id ${postId}`);
      }
      post.postStatus = COMPLETED; 

      return job;
     },

    deleteJob: async (parent, { jobID }, context) => {
      if (context.user) {
        const job = await Post.findOneAndDelete({
          _id: jobID,
          User: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { post: post._id } }
        );

        return job;
      }
      throw new AuthenticationError('There is no job with that ID!');
    },

    editJob: async (parent, { postTitle, postCategory, postText }) => {
      const job = await Post.findByIdAndUpdate({ 
        postTitle, 
        postCategory, 
        postText,
      });
      return job;
    },


  },
};

module.exports = resolvers;

//JUST STUB OUT THE JOB STATUS AND USER WHO ACCEPTS
