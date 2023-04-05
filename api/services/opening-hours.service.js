/**
 * Opening Hours Service class to manage the logic of the opening hours
 *
 * #### Example
 *
 * ```javascript
 * const service = new OpeningHoursService();
 * ```
 *
 * #### Functions
 *
 * ```javascript
 * // Finds all opening hours in the array of objects
 * service.find();
 * // Finds the opening hour with the provided id
 * service.findOne(id);
 * // Creates an opening hour with the provided data
 * service.create(data);
 * // Updates the opening hour with the provided id
 * service.update(id, changes);
 * // Deletes the opening hour with the provided id
 * service.delete(id);
 * ```
 */
class OpeningHoursService {
	constructor() {}

	/**
	 * Finds all opening hours in the array of objects
	 * @returns {Array} Array with all opening hours
	 */
	async find() {}

	/**
	 * Finds the opening hour with the provided id
	 * @param {id} id - id of the opening hour
	 * @returns {Object} Object with the opening hour
	 */
	async findOne(id) {}

	/**
	 * Finds the opening hour with the provided slug
	 * @param {string} slug - slug of the opening hour
	 * @returns {Object} Object with the opening hour
	 */
	async findBySlug(slug) {}

	/**
	 * Creates a opening hour with the provided data
	 * @param {*} data - data of the opening hour
	 * @returns {Object} Object with the opening hour created
	 */
	async create(data) {}

	/**
	 * Updates the opening hour with the provided id
	 * @param {id} id - id of the opening hour
	 * @param {*} changes - data of the opening hour
	 * @returns {Object} Object with the opening hour updated
	 * @throws {Error} Error if the opening hour is not found
	 */
	async update(id, changes) {}

	/**
	 * Deletes the opening hour with the provided id
	 * @param {id} id - id of the opening hour
	 * @returns {Object} Object with the opening hour deleted
	 * @throws {Error} Error if the opening hour is not found
	 */
	async delete(id) {}
}

module.exports = OpeningHoursService;
