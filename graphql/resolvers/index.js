const postsResolvers = require('./posts');
const userssResolvers = require('./users');
const commmentsResolvers = require('./comments');

module.exports = {
    Post: {
        likeCount(parent) {
            // If you send any type of query or mutation that returns a post it will  have to go 
            // through this modifier and add this properties
            return parent.likes.length;
        },
        commentCount: (parent) => parent.comments.length
    },
    Query: {
        ...postsResolvers.Query
    },
    Mutation: {
        ...postsResolvers.Mutation,
        ...userssResolvers.Mutation,
        ...commmentsResolvers.Mutation
    },
    Subscription: {
        ...postsResolvers.Subscription
    }
}