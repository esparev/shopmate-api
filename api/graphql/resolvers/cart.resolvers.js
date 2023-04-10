const CartService = require('../services/cart.service');
const service = new CartService();

/**
 * Finds all carts in the array of objects
 * @returns {Array} Array with all carts
 */
const carts = () => {
	return service.find();
};

/**
 * Finds the cart with the provided id
 * @param {id} id - id of the cart
 * @returns {Object} Object with the cart
 */
const cart = (_, { id }) => {
	return service.findOne(id);
};

/**
 * Creates a cart with the provided data
 * @param {*} data - data of the cart
 * @returns {Object} Object with the cart created
 */
const createCart = (_, { data }) => {
	return service.create(data);
};

/**
 * Updates the cart with the provided id
 * @param {id} id - id of the cart
 * @param {data} changes - data of the cart
 * @returns {Object} Object with the cart updated
 */
const updateCart = (_, { id, data }) => {
	return service.update(id, data);
};

/**
 * Deletes the cart with the provided id
 * @param {id} id - id of the cart
 * @returns {Object} Object with the cart deleted
 */
const deleteCart = async (_, { id }) => {
	await service.delete(id);
	return id;
};

module.exports = { carts, cart, createCart, updateCart, deleteCart };
