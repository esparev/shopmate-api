const Joi = require('joi');

const id = Joi.string().uuid({ version: 'uuidv4' });
const slug = Joi.string().min(3).max(30);
const name = Joi.string().min(3).max(30);

/**
 * Schema to validate the getCategory request
 */
const getCategorySchema = Joi.object({
	id: id.required(),
});

/**
 * Schema to validate the createCategory request
 */
const createCategorySchema = Joi.object({
	slug: slug.required(),
	name: name.required(),
});

/**
 * Schema to validate the updateCategory request
 */
const updateCategorySchema = Joi.object({
	slug,
	name,
});

module.exports = {
	getCategorySchema,
	createCategorySchema,
	updateCategorySchema,
};
