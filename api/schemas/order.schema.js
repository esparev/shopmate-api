const Joi = require('joi');

const id = Joi.string().uuid({ version: 'uuidv4' });
const total = Joi.number().min(0);
const certified = Joi.boolean();
const certificate = Joi.string();
const status = Joi.string().valid('pending', 'approved', 'rejected');
const userId = Joi.string().uuid({ version: 'uuidv4' });
const storeId = Joi.string().uuid({ version: 'uuidv4' });
const cartId = Joi.string().uuid({ version: 'uuidv4' });
const paymentId = Joi.string().uuid({ version: 'uuidv4' });

/**
 * Schema to validate the getOrder request
 */
const getOrderSchema = Joi.object({
	id: id.required(),
});

/**
 * Schema to validate the createOrder request
 */
const createOrderSchema = Joi.object({
	total: total.required(),
	certified: certified.required(),
	certificate: certificate.required(),
	status: status.required(),
	userId: userId.required(),
	storeId: storeId.required(),
	cartId: cartId.required(),
	paymentId: paymentId.required(),
});

/**
 * Schema to validate the updateOrder request
 */
const updateOrderSchema = Joi.object({
	certified,
	certificate,
	status,
});

module.exports = { getOrderSchema, createOrderSchema, updateOrderSchema };
