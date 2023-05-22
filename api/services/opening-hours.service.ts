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
	/**
	 * Finds all opening hours in the array of objects
	 * @returns {Array} Array with all opening hours
	 */
	async find() {}

	/**
	 * Finds the opening hour with the provided id
	 * @param {string} id - id of the opening hour
	 * @returns {Object} Object with the opening hour
	 */
	async findOne(id: string) {}

	/**
	 * Finds the opening hour with the provided slug
	 * @param {string} slug - slug of the opening hour
	 * @returns {Object} Object with the opening hour
	 */
	async findBySlug(slug: string) {}

	/**
	 * Creates a opening hour with the provided data
	 * @param {*} data - data of the opening hour
	 * @returns {Object} Object with the opening hour created
	 */
	async create(data: OpeningHours) {}

	/**
	 * Updates the opening hour with the provided id
	 * @param {string} id - id of the opening hour
	 * @param {*} changes - data of the opening hour
	 * @returns {Object} Object with the opening hour updated
	 */
	async update(id: string, changes: UpdateOpeningHours) {}

	/**
	 * Deletes the opening hour with the provided id
	 * @param {string} id - id of the opening hour
	 * @returns {Object} Object with the opening hour deleted
	 */
	async delete(id: string) {}
}

export default OpeningHoursService;
