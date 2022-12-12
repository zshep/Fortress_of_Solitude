const { Schema, model } = require('mongoose');

const PostSchema = new Schema({
  postTitle: {
    type: String,
    required: true,
    maxlength: 69,
    trim: true,
  },
  postCategory: {
    type: String,
    required: true,
    maxlength: 69,
    trim: true,
  },
  postText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  postUser: {
    type: String,
    required: true,
    trim: true,
  },
  postStatus: {
    type: String,
    required: true,
    trim: true
  }
  // timestamp
}, { timestamps: true })

const Post = model('Post', PostSchema);

module.exports = Post;