import Joi from "joi";

const id = Joi.string().uuid({ version: "uuidv4" });
const quantity = Joi.number().integer().min(0).default(0);
const active = Joi.boolean().default(false);
const lastConnection = Joi.date().default(Date.now());
const latitude = Joi.number().min(-90).max(90);
const longitude = Joi.number().min(-180).max(180);
const total = Joi.number().min(0).default(0);
const digitalSignature = Joi.string();
const storeId = Joi.string().uuid({ version: "uuidv4" });
const userId = Joi.string().uuid({ version: "uuidv4" });

/**
 * Schema to validate the getCart request
 */
const getCartSchema = Joi.object({
	id: id.required(),
});

/**
 * Schema to validate the createCart request
 */
const createCartSchema = Joi.object({
	quantity,
	active: active.required(),
	latitude: latitude.required(),
	longitude: longitude.required(),
	total: total.required(),
	digitalSignature: digitalSignature.required(),
	storeId: storeId.required(),
});

/**
 * Schema to validate the updateCart request
 */
const updateCartSchema = Joi.object({
	quantity,
	active,
	lastConnection,
	latitude,
	longitude,
	total,
	digitalSignature,
	userId,
});

export { getCartSchema, createCartSchema, updateCartSchema };
