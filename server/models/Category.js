const { Schema, model } = require('mongoose');

const CategorySchema = new Schema({
    category: {
        type: String,
        required: true,
        trim: true
    },
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post',
        },
    ],
});

const Category = model('Category', CategorySchema);

module.exports = Category;
