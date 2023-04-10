const PaymentMethodService = require('../services/payment-method.service');
const service = new PaymentMethodService();

/**
 * Finds all payment methods in the array of objects
 * @returns {Array} Array with all payment methods
 */
const paymentMethods = () => {
	return service.find();
};

/**
 * Finds the payment method with the provided id
 * @param {id} id - id of the payment method
 * @returns {Object} Object with the payment method
 */
const paymentMethod = (_, { id }) => {
	return service.findOne(id);
};

/**
 * Creates a payment method with the provided data
 * @param {*} data - data of the payment method
 * @returns {Object} Object with the payment method created
 */
const createPaymentMethod = (_, { data }) => {
	return service.create(data);
};

/**
 * Updates the payment method with the provided id
 * @param {id} id - id of the payment method
 * @param {data} changes - data of the payment method
 * @returns {Object} Object with the payment method updated
 */
const updatePaymentMethod = (_, { id, data }) => {
	return service.update(id, data);
};

/**
 * Deletes the payment method with the provided id
 * @param {id} id - id of the payment method
 * @returns {Object} Object with the payment method deleted
 */
const deletePaymentMethod = async (_, { id }) => {
	await service.delete(id);
	return id;
};

module.exports = {
	paymentMethods,
	paymentMethod,
	createPaymentMethod,
	updatePaymentMethod,
	deletePaymentMethod,
};
