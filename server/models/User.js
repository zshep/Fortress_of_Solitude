const { Schema, model } = require('mongoose');
// const PostSchema = require('./Post');
var bcrypt = require('bcrypt');
var saltFactor = 10;
// const validator = require('validator');

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: [true, 'This username has already been taken'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: [true, 'This email has already been taken'],
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [5, 'Password minimum length must be at least 5 characters long']
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],

  ppLevel: {
    type: Number,
    default: 0,
    required: false,
  },
  // publishedPosts: [
  //     PostSchema
  // ],
  //     toJSON: {
  //         virtuals: true,
  //     },
});

//CREATE A METHOD TO HASH USER PASSWORDS
UserSchema.pre('save', function (next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(saltFactor, function (err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', UserSchema);

module.exports = User;