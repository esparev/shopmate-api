/**
 * User Service class to manage the logic of the users
 *
 * #### Example
 *
 * ```javascript
 * const service = new UserService();
 * ```
 *
 * #### Functions
 *
 * ```javascript
 * // Finds all users in the array of objects
 * service.find();
 * // Finds the user with the provided id
 * service.findOne(id);
 * // Creates a user with the provided data
 * service.create(data);
 * // Updates the user with the provided id
 * service.update(id, changes);
 * // Deletes the user with the provided id
 * service.delete(id);
 * ```
 */
class UserService {
	constructor() {}

	/**
	 * Finds all users in the array of objects
	 * @returns {Array} Array with all users
	 */
	async find() {}

	/**
	 * Finds the user with the provided id
	 * @param {id} id - id of the user
	 * @returns {Object} Object with the user
	 */
	async findOne(id) {}

	/**
	 * Finds the user with the provided slug
	 * @param {string} slug - slug of the user
	 * @returns {Object} Object with the user
	 */
	async findBySlug(slug) {}

	/**
	 * Finds the user with the provided email
	 * @param {string} email - email of the user
	 * @returns {Object} Object with the user
	 */
	async findByEmail(email) {}

	/**
	 * Creates a user with the provided data
	 * @param {*} data - data of the user
	 * @returns {Object} Object with the user created
	 */
	async create(data) {}

	/**
	 * Updates the user with the provided id
	 * @param {id} id - id of the user
	 * @param {*} changes - data of the user
	 * @returns {Object} Object with the user updated
	 * @throws {Error} Error if the user is not found
	 */
	async update(id, changes) {}

	/**
	 * Deletes the user with the provided id
	 * @param {id} id - id of the user
	 * @returns {Object} Object with the user deleted
	 * @throws {Error} Error if the user is not found
	 */
	async delete(id) {}
}

module.exports = UserService;
