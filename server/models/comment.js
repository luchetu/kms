
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    body: {
        type: String,
        required: true,
    },
    authorId: {
        type: Schema.Types.ObjectId,
        ref: 'Author'
    },
    postId: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }
});

module.exports = mongoose.model('Comment', CommentSchema);
