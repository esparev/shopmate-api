const CategoryService = require('../services/category.service');
const service = new CategoryService();

/**
 * Finds all categories in the array of objects
 * @returns {Array} Array with all categories
 */
const categories = () => {
	return service.find();
};

/**
 * Finds the category with the provided id
 * @param {id} id - id of the category
 * @returns {Object} Object with the category
 */
const category = (_, { id }) => {
	return service.findOne(id);
};

/**
 * Creates a category with the provided data
 * @param {*} data - data of the category
 * @returns {Object} Object with the category created
 */
const createCategory = (_, { data }) => {
	return service.create(data);
};

/**
 * Updates the category with the provided id
 * @param {id} id - id of the category
 * @param {data} changes - data of the category
 * @returns {Object} Object with the category updated
 */
const updateCategory = (_, { id, data }) => {
	return service.update(id, data);
};

/**
 * Deletes the category with the provided id
 * @param {id} id - id of the category
 * @returns {Object} Object with the category deleted
 */
const deleteCategory = async (_, { id }) => {
	await service.delete(id);
	return id;
};

module.exports = {
	categories,
	category,
	createCategory,
	updateCategory,
	deleteCategory,
};
