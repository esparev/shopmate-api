const ProductService = require('../services/product.service');
const service = new ProductService();

/**
 * Finds all products in the array of objects
 * @returns {Array} Array with all products
 */
const products = () => {
	return service.find();
};

/**
 * Finds the product with the provided id
 * @param {id} id - id of the product
 * @returns {Object} Object with the product
 */
const product = (_, { id }) => {
	return service.findOne(id);
};

/**
 * Creates a product with the provided data
 * @param {*} data - data of the product
 * @returns {Object} Object with the product created
 */
const createProduct = (_, { data }) => {
	return service.create(data);
};

/**
 * Updates the product with the provided id
 * @param {id} id - id of the product
 * @param {data} changes - data of the product
 * @returns {Object} Object with the product updated
 */
const updateProduct = (_, { id, data }) => {
	return service.update(id, data);
};

/**
 * Deletes the product with the provided id
 * @param {id} id - id of the product
 * @returns {Object} Object with the product deleted
 */
const deleteProduct = async (_, { id }) => {
	await service.delete(id);
	return id;
};

module.exports = { products, product, createProduct, updateProduct, deleteProduct };
