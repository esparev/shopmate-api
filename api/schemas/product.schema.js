const Joi = require('joi');

const id = Joi.string().uuid({ version: 'uuidv4' });
const name = Joi.string();
const description = Joi.string();
const price = Joi.number().min(0);
const image = Joi.string().uri();
const weight = Joi.number().min(0);
const measeurementUnit = Joi.string();
const quantity = Joi.number().min(0);
const createdAt = Joi.date().default(Date.now());
const storeId = Joi.string().uuid({ version: 'uuidv4' });
const categoryId = Joi.string().uuid({ version: 'uuidv4' });

/**
 * Schema to validate the getProduct request
 */
const getProductSchema = Joi.object({
	id: id.required(),
});

/**
 * Schema to validate the createProduct request
 */
const createProductSchema = Joi.object({
	name: name.required(),
	description: description.required(),
	price: price.required(),
	image: image.required(),
	weight: weight.required(),
	measeurementUnit: measeurementUnit.required(),
	quantity: quantity.required(),
	createdAt: createdAt.required(),
	storeId: storeId.required(),
	categoryId: categoryId.required(),
});

/**
 * Schema to validate the updateProduct request
 */
const updateProductSchema = Joi.object({
	name,
	description,
	price,
	image,
	weight,
	measeurementUnit,
	quantity,
});

module.exports = { getProductSchema, createProductSchema, updateProductSchema };
