const { Schema, model } = require('mongoose');
//const timestamp

const PostSchema = new Schema({
  PostTitle: {
    type: String,
    required: true,
    maxlength: 69,
    trim: true,
  },
  PostCategory: {
    type: String,
    required: true,
    maxlength: 69,
    trim: true,
  },
  PostText: {
    type: String,
    required: 'You need to write a decription!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  PostUser: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    //   add timestamp
  },
  // timestamp
}, { timestamps: true })

const Post = model('Post', PostSchema);

module.exports = Post;