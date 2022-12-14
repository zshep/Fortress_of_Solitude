const { User, Post, Category } = require("../models");
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require("apollo-server-express");
// const validator = require('validator');

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

      // const takenUsername = await User.findOne({ username });
      // if (takenUsername) {
      //   throw Error('This username is already in use');
      // }

      // const takenEmail = await User.findOne({ email });
      // if (takenEmail) {
      //   throw Error('This email is already in use');
      // }

      // if (!validator.isEmail(email)) {
      //   throw Error('Email not valid')
      // }

      // if (!validator.isStrongPassword(password)) {
      //   throw Error('The requirements to create a password not met. Password must have a minimum length of 8 characters, include at least one lowercase character, include at least one uppercase character, include at least one number, include at least one unique symbol.')
      // }

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



    createJob: async (parent, { input }, context) => {
      console.log(context.user)
      if (context.user) {
        const newjob = await Post.create({

          postTitle: input.postTitle,
          postCategory: input.postCategory,
          postText: input.postText,
          postUser: input.postUser
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: {
              posts: newjob._id,
            }
          }

        )

        return newjob;
      }
    },

    acceptJob: async(parent, { _id, post }) => {
      const job = await Post.findOneAndUpdate(post, { id: postId })
      if (!post) {
        throw new Error(`Couldnt find job with id ${postId}`);
      }
      post.postStatus = ASSIGNED;
      
      return job;
    },


    completeJob: (parent, { _id, post }) => {
      const job = await Post.findOneAndUpdate(post, { id: postId })
      if (!post) {
        throw new Error(`Couldnt find job with id ${postId}`);
      }
      post.postStatus = COMPLETED;

      return job;
    },

    deleteJob: async (parent, { content }, context) => {
      const { postId }  = content
      console.log(postId);
      if (context.user) {
        
        
        const job = await Post.findOneAndDelete(
          
          {
          _id: postId,
          //User: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { posts: postId } }
        );
        return console.log('the delete work');

      }
      throw new AuthenticationError('There is no job with that ID!');
    },

    editJob: async (parent, { content } ) => {
      const { postTitle, postCategory, postText, postId} = content;
      //console.log(postTitle);
      //console.log(postId);
      const job = await Post.findByIdAndUpdate(
        postId,      
        { 
          postTitle, 
          postCategory, 
          postText,
      },
      { $new: true}
      );
      return job;
    },
  },

  //edit post title -> post Id and title
  // edit category ->
  // edit message

};

module.exports = resolvers;

//JUST STUB OUT THE JOB STATUS AND USER WHO ACCEPTS
