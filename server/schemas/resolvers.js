const { User } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return User.find()
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
        },
    },

    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
        }
    },
}

module.exports = resolvers;