/**
 * Order Service class to manage the logic of the orders
 *
 * #### Example
 *
 * ```javascript
 * const service = new OrderService();
 * ```
 *
 * #### Functions
 *
 * ```javascript
 * // Finds all orders in the array of objects
 * service.find();
 * // Finds the order with the provided id
 * service.findOne(id);
 * // Creates an order with the provided data
 * service.create(data);
 * // Updates the order with the provided id
 * service.update(id, changes);
 * // Deletes the order with the provided id
 * service.delete(id);
 * ```
 */
class OrderService {
	/**
	 * Finds all orders in the array of objects
	 * @returns {Array} Array with all orders
	 */
	async find() {}

	/**
	 * Finds the order with the provided id
	 * @param {string} id - id of the order
	 * @returns {Object} Object with the order
	 */
	async findOne(id: string) {}

	/**
	 * Creates a order with the provided data
	 * @param {*} data - data of the order
	 * @returns {Object} Object with the order created
	 */
	async create(data: Order) {}

	/**
	 * Updates the order with the provided id
	 * @param {string} id - id of the order
	 * @param {*} changes - data of the order
	 * @returns {Object} Object with the order updated
	 */
	async update(id: string, changes: UpdateOrder) {}

	/**
	 * Deletes the order with the provided id
	 * @param {string} id - id of the order
	 * @returns {Object} Object with the order deleted
	 */
	async delete(id: string) {}
}

export default OrderService;
