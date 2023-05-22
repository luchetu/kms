const { Post } = require("../../models/post.js")

module.exports = {
    // Create a new post
    createPost: async (req, res) => {
        try {
            const { title, body, author, category, image } = req.body;
            const post = await Post.create({ title, body, author, category, image });
            res.status(201).json({ post });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Error creating post' });
        }
    },

    // Get all posts
    getAllPosts: async (req, res) => {
        try {
            const posts = await Post.find().populate('author').populate('category').populate('comments');
            res.status(200).json({ posts });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Error getting posts' });
        }
    },

    // Get a single post by ID
    getPostById: async (req, res) => {
        try {
            const { id } = req.params;
            const post = await Post.findById(id).populate('author').populate('category').populate('comments');
            if (!post) {
                res.status(404).json({ message: 'Post not found' });
            } else {
                res.status(200).json({ post });
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Error getting post' });
        }
    },

    // Update a post by ID
    updatePostById: async (req, res) => {
        try {
            const { id } = req.params;
            const { title, body, author, category, image } = req.body;
            const post = await Post.findByIdAndUpdate(id, { title, body, author, category, image }, { new: true }).populate('author').populate('category').populate('comments');
            if (!post) {
                res.status(404).json({ message: 'Post not found' });
            } else {
                res.status(200).json({ post });
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Error updating post' });
        }
    },

    // Delete a post by ID
    deletePostById: async (req, res) => {
        try {
            const { id } = req.params;
            const post = await Post.findByIdAndDelete(id);
            if (!post) {
                res.status(404).json({ message: 'Post not found' });
            } else {
                res.status(200).json({ message: 'Post deleted successfully' });
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Error deleting post' });
        }
    }
}

