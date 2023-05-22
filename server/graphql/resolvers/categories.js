const { Category } = require("../../models/category.js");

module.exports = {
    createCategory: async (req, res) => {
        try {
            const { name } = req.body;
            const category = await Category.create({ name });
            res.status(201).json({ category });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Error creating category' });
        }
    },
    getAllCategories: async (req, res) => {
        try {
            const categories = await Category.find();
            res.status(200).json({ categories });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Error getting categories' });
        }
    },
    getCategoryById: async (req, res) => {
        try {
            const { id } = req.params;
            const { name } = req.body;
            const category = await Category.findByIdAndUpdate(id, { name }, { new: true });
            if (!category) {
                res.status(404).json({ message: 'Category not found' });
            } else {
                res.status(200).json({ category });
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Error updating category' });
        }
    },
    deleteCategoryById: async (req, res) => {
        try {
            const { id } = req.params;
            const category = await Category.findByIdAndDelete(id);
            if (!category) {
                res.status(404).json({ message: 'Category not found' });
            } else {
                res.status(200).json({ message: 'Category deleted successfully' });
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Error deleting category' });
        }
    }

}