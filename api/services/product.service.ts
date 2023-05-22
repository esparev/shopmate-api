/**
 * Product Service class to manage the logic of the products
 *
 * #### Example
 *
 * ```javascript
 * const service = new ProductService();
 * ```
 *
 * #### Functions
 *
 * ```javascript
 * // Finds all products in the array of objects
 * service.find();
 * // Finds the product with the provided id
 * service.findOne(id);
 * // Creates a product with the provided data
 * service.create(data);
 * // Updates the product with the provided id
 * service.update(id, changes);
 * // Deletes the product with the provided id
 * service.delete(id);
 * ```
 */
class ProductService {
	/**
	 * Finds all products in the array of objects
	 * @returns {Array} Array with all products
	 */
	async find() {}

	/**
	 * Finds the product with the provided id
	 * @param {string} id - id of the product
	 * @returns {Object} Object with the product
	 */
	async findOne(id: string) {}

	/**
	 * Finds the product with the provided slug
	 * @param {string} slug - slug of the product
	 * @returns {Object} Object with the product
	 */
	async findBySlug(slug: string) {}

	/**
	 * Creates a product with the provided data
	 * @param {*} data - data of the product
	 * @returns {Object} Object with the product created
	 */
	async create(data: Product) {}

	/**
	 * Updates the product with the provided id
	 * @param {string} id - id of the product
	 * @param {*} changes - data of the product
	 * @returns {Object} Object with the product updated
	 */
	async update(id: string, changes: UpdateProduct) {}

	/**
	 * Deletes the product with the provided id
	 * @param {string} id - id of the product
	 * @returns {Object} Object with the product deleted
	 */
	async delete(id: string) {}
}

export default ProductService;
