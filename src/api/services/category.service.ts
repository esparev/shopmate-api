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
	/**
	 * Finds all categories in the array of objects
	 * @returns {Array} Array with all categories
	 */
	async find() {}

	/**
	 * Finds the category with the provided id
	 * @param {string} id - id of the category
	 * @returns {Object} Object with the category
	 */
	async findOne(id: string) {}

	/**
	 * Finds the category with the provided slug
	 * @param {string} slug - slug of the category
	 * @returns {Object} Object with the category
	 */
	async findBySlug(slug: string) {}

	/**
	 * Creates a category with the provided data
	 * @param {*} data - data of the category
	 * @returns {Object} Object with the category created
	 */
	async create(data: Category) {}

	/**
	 * Updates the category with the provided id
	 * @param {string} id - id of the category
	 * @param {*} changes - data of the category
	 * @returns {Object} Object with the category updated
	 */
	async update(id: string, changes: UpdateCategory) {}

	/**
	 * Deletes the category with the provided id
	 * @param {string} id - id of the category
	 * @returns {Object} Object with the category deleted
	 */
	async delete(id: string) {}
}

export default CategoryService;
