const { Comment } = require('../../models/comment.js')

module.exports = {
    createComment: async (req, res) => {
        try {
            const { body, author, post } = req.body;
            const comment = await Comment.create({ body, author, post });
            res.status(201).json({ comment });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Error creating comment' });
        }
    },
    getAllComments: async (req, res) => {
        try {
            const comments = await Comment.find().populate('author').populate('post');
            res.status(200).json({ comments });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Error getting comments' });
        }


    }
}