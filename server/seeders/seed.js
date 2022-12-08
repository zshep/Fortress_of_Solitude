const db = require('../config/connection');
const { User, Post, Category } = require('../models');
const userSeeds = require('./userSeeds.json');
const postSeeds = require('./postSeeds.json');
const categorySeeds = require('./categorySeeds.json');

db.once('open', async () => {
    try {
        await User.deleteMany({});
        await Post.deleteMany({});
        await Category.deleteMany({});

        await User.create(userSeeds);
        await Post.create(postSeeds);
        await Category.create(categorySeeds);

        for (let i = 0; i < postSeeds.length; i++) {
            const { _id, postUser } = await Post.create(postSeeds[i]);
            const user = await User.findOneAndUpdate(
                { username: postUser },
                {
                    $addToSet: {
                        posts: _id,
                    },
                }
            );
        }

        console.log('all done!');
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
});
