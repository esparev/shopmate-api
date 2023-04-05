const Joi = require('joi');

const id = Joi.string().uuid({ version: 'uuidv4' });
const quantity = Joi.number().integer().min(0).default(0);
const active = Joi.boolean().default(false);
const lastConnection = Joi.date().default(Date.now());
const latitude = Joi.number().min(-90).max(90);
const longitude = Joi.number().min(-180).max(180);
const productTotal = Joi.number().min(0).default(0);
const digitalSignature = Joi.string();
const createdAt = Joi.date().default(Date.now());
const storeId = Joi.string().uuid({ version: 'uuidv4' });
const userId = Joi.string().uuid({ version: 'uuidv4' });

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
	lastConnection: lastConnection.required(),
	latitude: latitude.required(),
	longitude: longitude.required(),
	productTotal: productTotal.required(),
	digitalSignature: digitalSignature.required(),
	createdAt: createdAt.required(),
	storeId: storeId.required(),
	userId,
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
	productTotal,
	digitalSignature,
	createdAt,
});

module.exports = { getCartSchema, createCartSchema, updateCartSchema };
