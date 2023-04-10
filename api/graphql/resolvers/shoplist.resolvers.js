const ShoplistService = require('../services/shoplist.service');
const service = new ShoplistService();

/**
 * Finds all shoplists in the array of objects
 * @returns {Array} Array with all shoplists
 */
const shoplists = () => {
	return service.find();
};

/**
 * Finds the shoplist with the provided id
 * @param {id} id - id of the shoplist
 * @returns {Object} Object with the shoplist
 */
const shoplist = (_, { id }) => {
	return service.findOne(id);
};

/**
 * Creates a shoplist with the provided data
 * @param {*} data - data of the shoplist
 * @returns {Object} Object with the shoplist created
 */
const createShoplist = (_, { data }) => {
	return service.create(data);
};

/**
 * Updates the shoplist with the provided id
 * @param {id} id - id of the shoplist
 * @param {data} changes - data of the shoplist
 * @returns {Object} Object with the shoplist updated
 */
const updateShoplist = (_, { id, data }) => {
	return service.update(id, data);
};

/**
 * Deletes the shoplist with the provided id
 * @param {id} id - id of the shoplist
 * @returns {Object} Object with the shoplist deleted
 */
const deleteShoplist = async (_, { id }) => {
	await service.delete(id);
	return id;
};

module.exports = {
	shoplists,
	shoplist,
	createShoplist,
	updateShoplist,
	deleteShoplist,
};
