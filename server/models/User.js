const { Schema, model } = require('mongoose');
const PostSchema = require ('./Post');

const UserSchema = new Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    // Post: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Post',
    //   },
    // ],
    publishedPosts: [
        PostSchema
    ],
        toJSON: {
            virtuals: true,
        },
    
  });

  const User = model('User', UserSchema);

module.exports = User;