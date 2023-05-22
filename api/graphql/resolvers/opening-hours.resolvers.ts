import OpeningHoursService from "../../services/opening-hours.service";
const service = new OpeningHoursService();

/**
 * Finds all opening hours in the array of objects
 */
const openingHours = () => {
	return service.find();
};

/**
 * Finds the opening hour with the provided id
 */
const openingHour = (_: any, { id }: OpeningHours) => {
	return service.findOne(id);
};

/**
 * Creates a opening hour with the provided data
 */
const createOpeningHour = (_: any, { data }: { data: OpeningHours }) => {
	return service.create(data);
};

/**
 * Updates the opening hour with the provided id
 */
const updateOpeningHour = (
	_: any,
	{ id, data }: OpeningHours & { data: OpeningHours }
) => {
	return service.update(id, data);
};

/**
 * Deletes the opening hour with the provided id
 */
const deleteOpeningHour = async (_: any, { id }: OpeningHours) => {
	await service.delete(id);
	return id;
};

export {
	openingHours,
	openingHour,
	createOpeningHour,
	updateOpeningHour,
	deleteOpeningHour,
};
