import Joi from "joi";

const id = Joi.string().uuid({ version: "uuidv4" });
const slug = Joi.string();
const name = Joi.string();
const description = Joi.string();
const logo = Joi.string().uri();
const phone = Joi.string();
const address = Joi.string();
const latitude = Joi.number().min(-90).max(90);
const longitude = Joi.number().min(-180).max(180);

/**
 * Schema to validate the getStore request
 */
const getStoreSchema = Joi.object({
	id: id.required(),
});

/**
 * Schema to validate the createStore request
 */
const createStoreSchema = Joi.object({
	slug: slug.required(),
	name: name.required(),
	description: description.required(),
	logo: logo.required(),
	phone: phone.required(),
	address: address.required(),
	latitude: latitude.required(),
	longitude: longitude.required(),
});

/**
 * Schema to validate the updateStore request
 */
const updateStoreSchema = Joi.object({
	slug,
	name,
	description,
	logo,
	phone,
	address,
	latitude,
	longitude,
});

export { getStoreSchema, createStoreSchema, updateStoreSchema };
