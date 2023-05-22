const authResolver = require('./auth.js')
const CommentResolver = require('./comments.js')
const PostResolver = require('./posts.js')

const rootResolver = {
    ...authResolver,
    ...CommentResolver,
    ...PostResolver
};

module.exports = rootResolver;