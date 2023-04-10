const OrderService = require('../services/order.service');
const service = new OrderService();

/**
 * Finds all orders in the array of objects
 * @returns {Array} Array with all orders
 */
const orders = () => {
	return service.find();
};

/**
 * Finds the order with the provided id
 * @param {id} id - id of the order
 * @returns {Object} Object with the order
 */
const order = (_, { id }) => {
	return service.findOne(id);
};

/**
 * Creates a order with the provided data
 * @param {*} data - data of the order
 * @returns {Object} Object with the order created
 */
const createOrder = (_, { data }) => {
	return service.create(data);
};

/**
 * Updates the order with the provided id
 * @param {id} id - id of the order
 * @param {data} changes - data of the order
 * @returns {Object} Object with the order updated
 */
const updateOrder = (_, { id, data }) => {
	return service.update(id, data);
};

/**
 * Deletes the order with the provided id
 * @param {id} id - id of the order
 * @returns {Object} Object with the order deleted
 */
const deleteOrder = async (_, { id }) => {
	await service.delete(id);
	return id;
};

module.exports = { orders, order, createOrder, updateOrder, deleteOrder };
