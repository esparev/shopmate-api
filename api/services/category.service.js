/**
 * Category Service class to manage the logic of the categories
 *
 * #### Example
 *
 * ```javascript
 * const service = new CategoryService();
 * ```
 *
 * #### Functions
 *
 * ```javascript
 * // Finds all categories in the array of objects
 * service.find();
 * // Finds the category with the provided id
 * service.findOne(id);
 * // Creates a category with the provided data
 * service.create(data);
 * // Updates the category with the provided id
 * service.update(id, changes);
 * // Deletes the category with the provided id
 * service.delete(id);
 * ```
 */
class CategoryService {
	constructor() {}

	/**
	 * Finds all categories in the array of objects
	 * @returns {Array} Array with all categories
	 */
	async find() {}

	/**
	 * Finds the category with the provided id
	 * @param {id} id - id of the category
	 * @returns {Object} Object with the category
	 */
	async findOne(id) {}

	/**
	 * Finds the category with the provided slug
	 * @param {string} slug - slug of the category
	 * @returns {Object} Object with the category
	 */
	async findBySlug(slug) {}

	/**
	 * Creates a category with the provided data
	 * @param {*} data - data of the category
	 * @returns {Object} Object with the category created
	 */
	async create(data) {}

	/**
	 * Updates the category with the provided id
	 * @param {id} id - id of the category
	 * @param {*} changes - data of the category
	 * @returns {Object} Object with the category updated
	 * @throws {Error} Error if the category is not found
	 */
	async update(id, changes) {}

	/**
	 * Deletes the category with the provided id
	 * @param {id} id - id of the category
	 * @returns {Object} Object with the category deleted
	 * @throws {Error} Error if the category is not found
	 */
	async delete(id) {}
}

module.exports = CategoryService;
