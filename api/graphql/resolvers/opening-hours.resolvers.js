const OpeningHoursService = require('../services/opening-hours.service');
const service = new OpeningHoursService();

/**
 * Finds all opening hours in the array of objects
 * @returns {Array} Array with all opening hours
 */
const openingHours = () => {
	return service.find();
};

/**
 * Finds the opening hour with the provided id
 * @param {id} id - id of the opening hour
 * @returns {Object} Object with the opening hour
 */
const openingHour = (_, { id }) => {
	return service.findOne(id);
};

/**
 * Creates a opening hour with the provided data
 * @param {*} data - data of the opening hour
 * @returns {Object} Object with the opening hour created
 */
const createOpeningHour = (_, { data }) => {
	return service.create(data);
};

/**
 * Updates the opening hour with the provided id
 * @param {id} id - id of the opening hour
 * @param {data} changes - data of the opening hour
 * @returns {Object} Object with the opening hour updated
 */
const updateOpeningHour = (_, { id, data }) => {
	return service.update(id, data);
};

/**
 * Deletes the opening hour with the provided id
 * @param {id} id - id of the opening hour
 * @returns {Object} Object with the opening hour deleted
 */
const deleteOpeningHour = async (_, { id }) => {
	await service.delete(id);
	return id;
};

module.exports = {
	openingHours,
	openingHour,
	createOpeningHour,
	updateOpeningHour,
	deleteOpeningHour,
};
