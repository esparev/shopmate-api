const StoreService = require('../services/store.service');
const service = new StoreService();

/**
 * Finds all stores in the array of objects
 * @returns {Array} Array with all stores
 */
const stores = () => {
	return service.find();
};

/**
 * Finds the store with the provided id
 * @param {id} id - id of the store
 * @returns {Object} Object with the store
 */
const store = (_, { id }) => {
	return service.findOne(id);
};

/**
 * Creates a store with the provided data
 * @param {*} data - data of the store
 * @returns {Object} Object with the store created
 */
const createStore = (_, { data }) => {
	return service.create(data);
};

/**
 * Updates the store with the provided id
 * @param {id} id - id of the store
 * @param {data} changes - data of the store
 * @returns {Object} Object with the store updated
 */
const updateStore = (_, { id, data }) => {
	return service.update(id, data);
};

/**
 * Deletes the store with the provided id
 * @param {id} id - id of the store
 * @returns {Object} Object with the store deleted
 */
const deleteStore = async (_, { id }) => {
	await service.delete(id);
	return id;
};

module.exports = { stores, store, createStore, updateStore, deleteStore };
