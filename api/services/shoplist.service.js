/**
 * Shoplist Service class to manage the logic of the shoplists
 *
 * #### Example
 *
 * ```javascript
 * const service = new ShoplistService();
 * ```
 *
 * #### Functions
 *
 * ```javascript
 * // Finds all shoplists in the array of objects
 * service.find();
 * // Finds the shoplist with the provided id
 * service.findOne(id);
 * // Creates a shoplist with the provided data
 * service.create(data);
 * // Updates the shoplist with the provided id
 * service.update(id, changes);
 * // Deletes the shoplist with the provided id
 * service.delete(id);
 * ```
 */
class ShoplistService {
	constructor() {}

	/**
	 * Finds all shoplists in the array of objects
	 * @returns {Array} Array with all shoplists
	 */
	async find() {}

	/**
	 * Finds the shoplist with the provided id
	 * @param {id} id - id of the shoplist
	 * @returns {Object} Object with the shoplist
	 */
	async findOne(id) {}

	/**
	 * Finds the shoplist with the provided slug
	 * @param {string} slug - slug of the shoplist
	 * @returns {Object} Object with the shoplist
	 */
	async findBySlug(slug) {}

	/**
	 * Creates a shoplist with the provided data
	 * @param {*} data - data of the shoplist
	 * @returns {Object} Object with the shoplist created
	 */
	async create(data) {}

	/**
	 * Updates the shoplist with the provided id
	 * @param {id} id - id of the shoplist
	 * @param {*} changes - data of the shoplist
	 * @returns {Object} Object with the shoplist updated
	 * @throws {Error} Error if the shoplist is not found
	 */
	async update(id, changes) {}

	/**
	 * Deletes the shoplist with the provided id
	 * @param {id} id - id of the shoplist
	 * @returns {Object} Object with the shoplist deleted
	 * @throws {Error} Error if the shoplist is not found
	 */
	async delete(id) {}
}

module.exports = ShoplistService;
