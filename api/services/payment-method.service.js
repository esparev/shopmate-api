/**
 * Payment Method Service class to manage the logic of the payment methods
 *
 * #### Example
 *
 * ```javascript
 * const service = new PaymentMethodService();
 * ```
 *
 * #### Functions
 *
 * ```javascript
 * // Finds all payment methods in the array of objects
 * service.find();
 * // Finds the payment method with the provided id
 * service.findOne(id);
 * // Creates a payment method with the provided data
 * service.create(data);
 * // Updates the payment method with the provided id
 * service.update(id, changes);
 * // Deletes the payment method with the provided id
 * service.delete(id);
 * ```
 */
class PaymentMethodService {
	constructor() {}

	/**
	 * Finds all payment methods in the array of objects
	 * @returns {Array} Array with all payment methods
	 */
	async find() {}

	/**
	 * Finds the payment method with the provided id
	 * @param {id} id - id of the payment method
	 * @returns {Object} Object with the payment method
	 */
	async findOne(id) {}

	/**
	 * Creates a payment method with the provided data
	 * @param {*} data - data of the payment method
	 * @returns {Object} Object with the payment method created
	 */
	async create(data) {}

	/**
	 * Updates the payment method with the provided id
	 * @param {id} id - id of the payment method
	 * @param {*} changes - data of the payment method
	 * @returns {Object} Object with the payment method updated
	 * @throws {Error} Error if the payment method is not found
	 */
	async update(id, changes) {}

	/**
	 * Deletes the payment method with the provided id
	 * @param {id} id - id of the payment method
	 * @returns {Object} Object with the payment method deleted
	 * @throws {Error} Error if the payment method is not found
	 */
	async delete(id) {}
}

module.exports = PaymentMethodService;
