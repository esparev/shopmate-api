const express = require('express');

const CategoryService = require('../services/category.service');
const {
	getCategorySchema,
	createCategorySchema,
	updateCategorySchema,
} = require('../schemas/category.schema');

const router = express.Router();
const service = new CategoryService();

router.get('/', getCategories);
router.get('/:id', getCategory);
router.post('/', createCategory);
router.patch('/:id', updateCategory);
router.delete('/:id', deleteCategory);

/**
 * Get all categories from the database using the category service
 */
const getCategories = async (req, res, next) => {
	try {
		const categories = await service.find();
		res.status(200).json(categories);
	} catch (error) {
		next(error);
	}
};

/**
 * Get a category from the database using the category service
 */
const getCategory = async (req, res, next) => {
	try {
		const { id } = req.params;
		const category = await service.findOne(id);
		res.status(200).json(category);
	} catch (error) {
		next(error);
	}
};

/**
 * Add a category to the database using the category service
 */
const createCategory = async (req, res, next) => {
	try {
		const { body: category } = req;
		const newCategory = await service.create(category);
		res
			.status(201)
			.json({ newCategory, message: 'Category created successfully' });
	} catch (error) {
		next(error);
	}
};

/**
 * Update a category in the database using the category service
 */
const updateCategory = async (req, res, next) => {
	try {
		const { id } = req.params;
		const { body: category } = req;
		const updatedCategory = await service.update(id, category);
		res
			.status(200)
			.json({ updatedCategory, message: 'Category updated successfully' });
	} catch (error) {
		next(error);
	}
};

/**
 * Delete a category from the database using the category service
 */
const deleteCategory = async (req, res, next) => {
	try {
		const { id } = req.params;
		const deletedCategory = await service.delete(id);
		res
			.status(200)
			.json({ deletedCategory, message: 'Category deleted successfully' });
	} catch (error) {
		next(error);
	}
};

module.exports = router;
