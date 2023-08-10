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
	/**
	 * Finds all shoplists in the array of objects
	 * @returns {Array} Array with all shoplists
	 */
	async find() {}

	/**
	 * Finds the shoplist with the provided id
	 * @param {string} id - id of the shoplist
	 * @returns {Object} Object with the shoplist
	 */
	async findOne(id: string) {}

	/**
	 * Finds the shoplist with the provided slug
	 * @param {string} slug - slug of the shoplist
	 * @returns {Object} Object with the shoplist
	 */
	async findBySlug(slug: string) {}

	/**
	 * Creates a shoplist with the provided data
	 * @param {*} data - data of the shoplist
	 * @returns {Object} Object with the shoplist created
	 */
	async create(data: Shoplist) {}

	/**
	 * Updates the shoplist with the provided id
	 * @param {string} id - id of the shoplist
	 * @param {*} changes - data of the shoplist
	 * @returns {Object} Object with the shoplist updated
	 */
	async update(id: string, changes: UpdateShoplist) {}

	/**
	 * Deletes the shoplist with the provided id
	 * @param {string} id - id of the shoplist
	 * @returns {Object} Object with the shoplist deleted
	 */
	async delete(id: string) {}
}

export default ShoplistService;
