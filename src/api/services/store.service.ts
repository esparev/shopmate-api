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
	/**
	 * Finds all stores in the array of objects
	 * @returns {Array} Array with all stores
	 */
	async find() {}

	/**
	 * Finds the store with the provided id
	 * @param {string} id - id of the store
	 * @returns {Object} Object with the store
	 */
	async findOne(id: string) {}

	/**
	 * Finds the store with the provided slug
	 * @param {string} slug - slug of the store
	 * @returns {Object} Object with the store
	 */
	async findBySlug(slug: string) {}

	/**
	 * Creates a store with the provided data
	 * @param {*} data - data of the store
	 * @returns {Object} Object with the store created
	 */
	async create(data: Store) {}

	/**
	 * Updates the store with the provided id
	 * @param {string} id - id of the store
	 * @param {*} changes - data of the store
	 * @returns {Object} Object with the store updated
	 */
	async update(id: string, changes: UpdateStore) {}

	/**
	 * Deletes the store with the provided id
	 * @param {string} id - id of the store
	 * @returns {Object} Object with the store deleted
	 */
	async delete(id: string) {}
}

export default StoreService;
