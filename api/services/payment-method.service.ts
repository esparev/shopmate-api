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
	/**
	 * Finds all payment methods in the array of objects
	 * @returns {Array} Array with all payment methods
	 */
	async find() {}

	/**
	 * Finds the payment method with the provided id
	 * @param {string} id - id of the payment method
	 * @returns {Object} Object with the payment method
	 */
	async findOne(id: string) {}

	/**
	 * Creates a payment method with the provided data
	 * @param {*} data - data of the payment method
	 * @returns {Object} Object with the payment method created
	 */
	async create(data: PaymentMethod) {}

	/**
	 * Updates the payment method with the provided id
	 * @param {string} id - id of the payment method
	 * @param {*} changes - data of the payment method
	 * @returns {Object} Object with the payment method updated
	 */
	async update(id: string, changes: UpdatePaymentMethod) {}

	/**
	 * Deletes the payment method with the provided id
	 * @param {string} id - id of the payment method
	 * @returns {Object} Object with the payment method deleted
	 */
	async delete(id: string) {}
}

export default PaymentMethodService;
