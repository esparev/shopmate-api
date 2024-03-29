import Joi from "joi";

const id = Joi.string().uuid({ version: "uuidv4" });
const day = Joi.string().min(3).max(30);
const openingHour = Joi.number().min(0).max(24);
const closingHour = Joi.number().min(0).max(24);
const storeId = Joi.string().uuid({ version: "uuidv4" });

/**
 * Schema to validate the getOpeningHours request
 */
const getOpeningHoursSchema = Joi.object({
	id: id.required(),
});

/**
 * Schema to validate the createOpeningHour request
 */
const createOpeningHoursSchema = Joi.object({
	day: day.required(),
	openingHour: openingHour.required(),
	closingHour: closingHour.required(),
	storeId: storeId.required(),
});

/**
 * Schema to validate the updateOpeningHour request
 */
const updateOpeningHoursSchema = Joi.object({
	day,
	openingHour,
	closingHour,
});

export {
	getOpeningHoursSchema,
	createOpeningHoursSchema,
	updateOpeningHoursSchema,
};
