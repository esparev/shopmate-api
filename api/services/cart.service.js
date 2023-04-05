/**
 * Cart Service class to manage the logic of the carts
 *
 * #### Example
 *
 * ```javascript
 * const service = new CartService();
 * ```
 *
 * #### Functions
 *
 * ```javascript
 * // Finds all carts in the array of objects
 * service.find();
 * // Finds the cart with the provided id
 * service.findOne(id);
 * // Creates a cart with the provided data
 * service.create(data);
 * // Updates the cart with the provided id
 * service.update(id, changes);
 * // Deletes the cart with the provided id
 * service.delete(id);
 * ```
 */
class CartService {
	constructor() {}

	/**
	 * Finds all carts in the array of objects
	 * @returns {Array} Array with all carts
	 */
	async find() {}

	/**
	 * Finds the cart with the provided id
	 * @param {string} id - id of the cart
	 * @returns {Object} Object with the cart
	 */
	async findOne(id) {}

	/**
	 * Creates a cart with the provided data
	 * @param {*} data - data of the cart
	 * @returns {Object} Object with the cart created
	 */
	async create(data) {}

	/**
	 * Updates the cart with the provided id
	 * @param {string} id - id of the cart
	 * @param {*} changes - data of the cart
	 * @returns {Object} Object with the cart updated
	 * @throws {Error} Error if the cart is not found
	 */
	async update(id, changes) {}

	/**
	 * Deletes the cart with the provided id
	 * @param {string} id - id of the cart
	 * @returns {Object} Object with the cart deleted
	 * @throws {Error} Error if the cart is not found
	 */
	async delete(id) {}
}

module.exports = CartService;
