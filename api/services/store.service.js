/**
 * Store Service class to manage the logic of the stores
 *
 * #### Example
 *
 * ```javascript
 * const service = new StoreService();
 * ```
 *
 * #### Functions
 *
 * ```javascript
 * // Finds all stores in the array of objects
 * service.find();
 * // Finds the store with the provided id
 * service.findOne(id);
 * // Creates a store with the provided data
 * service.create(data);
 * // Updates the store with the provided id
 * service.update(id, changes);
 * // Deletes the store with the provided id
 * service.delete(id);
 * ```
 */
class StoreService {
	constructor() {}

	/**
	 * Finds all stores in the array of objects
	 * @returns {Array} Array with all stores
	 */
	async find() {}

	/**
	 * Finds the store with the provided id
	 * @param {id} id - id of the store
	 * @returns {Object} Object with the store
	 */
	async findOne(id) {}

	/**
	 * Finds the store with the provided slug
	 * @param {string} slug - slug of the store
	 * @returns {Object} Object with the store
	 */
	async findBySlug(slug) {}

	/**
	 * Creates a store with the provided data
	 * @param {*} data - data of the store
	 * @returns {Object} Object with the store created
	 */
	async create(data) {}

	/**
	 * Updates the store with the provided id
	 * @param {id} id - id of the store
	 * @param {*} changes - data of the store
	 * @returns {Object} Object with the store updated
	 * @throws {Error} Error if the store is not found
	 */
	async update(id, changes) {}

	/**
	 * Deletes the store with the provided id
	 * @param {id} id - id of the store
	 * @returns {Object} Object with the store deleted
	 * @throws {Error} Error if the store is not found
	 */
	async delete(id) {}
}

module.exports = StoreService;
