const Joi = require('joi');

const id = Joi.string().uuid({ version: 'uuidv4' });
const total = Joi.number().min(0);
const userId = Joi.string().uuid({ version: 'uuidv4' });

/**
 * Schema to validate the getShoplist request
 */
const getShoplistSchema = Joi.object({
	id: id.required(),
});

/**
 * Schema to validate the createShoplist request
 */
const createShoplistSchema = Joi.object({
	total: total.required(),
	userId: userId.required(),
});

/**
 * Schema to validate the updateShoplist request
 */
const updateShoplistSchema = Joi.object({
	total,
});

module.exports = {
	getShoplistSchema,
	createShoplistSchema,
	updateShoplistSchema,
};
