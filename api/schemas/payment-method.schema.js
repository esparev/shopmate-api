const Joi = require('joi');

const id = Joi.string().uuid({ version: 'uuidv4' });
const alias = Joi.string().min(3).max(30);
const cardholderName = Joi.string();
const number = Joi.string();
const network = Joi.string();
const expiryMonth = Joi.number().min(1).max(12);
const expiryYear = Joi.number().min(2021);
const cvv = Joi.string().min(3).max(4);
const userId = Joi.string().uuid({ version: 'uuidv4' });

/**
 * Schema to validate the getPaymentMethod request
 */
const getPaymentMethodSchema = Joi.object({
	id: id.required(),
});

/**
 * Schema to validate the createPaymentMethod request
 */
const createPaymentMethodSchema = Joi.object({
	alias: alias.required(),
	cardholderName: cardholderName.required(),
	number: number.required(),
	network: network.required(),
	expiryMonth: expiryMonth.required(),
	expiryYear: expiryYear.required(),
	cvv: cvv.required(),
	userId: userId.required(),
});

/**
 * Schema to validate the updatePaymentMethod request
 */
const updatePaymentMethodSchema = Joi.object({
	alias,
});

module.exports = {
	getPaymentMethodSchema,
	createPaymentMethodSchema,
	updatePaymentMethodSchema,
};
