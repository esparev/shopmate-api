const express = require('express');

const PaymentMethodService = require('../services/payment-method.service');
const {
	getPaymentMethodSchema,
	createPaymentMethodSchema,
	updatePaymentMethodSchema,
} = require('../schemas/payment-method.schema');

const router = express.Router();
const service = new PaymentMethodService();

router.get('/', getPaymentMethods);
router.get('/:id', getPaymentMethod);
router.post('/', createPaymentMethod);
router.patch('/:id', updatePaymentMethod);
router.delete('/:id', deletePaymentMethod);

/**
 * Get all payment methods from the database using the payment method service
 */
const getPaymentMethods = async (req, res, next) => {
	try {
		const paymentMethods = await service.find();
		res.status(200).json(paymentMethods);
	} catch (error) {
		next(error);
	}
};

/**
 * Get a payment method from the database using the payment method service
 */
const getPaymentMethod = async (req, res, next) => {
	try {
		const { id } = req.params;
		const paymentMethod = await service.findOne(id);
		res.status(200).json(paymentMethod);
	} catch (error) {
		next(error);
	}
};

/**
 * Add a payment method to the database using the payment method service
 */
const createPaymentMethod = async (req, res, next) => {
	try {
		const { body: paymentMethod } = req;
		const newPaymentMethod = await service.create(paymentMethod);
		res
			.status(201)
			.json({
				newPaymentMethod,
				message: 'Payment method created successfully',
			});
	} catch (error) {
		next(error);
	}
};

/**
 * Update a payment method in the database using the payment method service
 */
const updatePaymentMethod = async (req, res, next) => {
	try {
		const { id } = req.params;
		const { body: paymentMethod } = req;
		const updatedPaymentMethod = await service.update(id, paymentMethod);
		res
			.status(200)
			.json({
				updatedPaymentMethod,
				message: 'Payment method updated successfully',
			});
	} catch (error) {
		next(error);
	}
};

/**
 * Delete a payment method from the database using the payment method service
 */
const deletePaymentMethod = async (req, res, next) => {
	try {
		const { id } = req.params;
		const deletedPaymentMethod = await service.delete(id);
		res
			.status(200)
			.json({
				deletedPaymentMethod,
				message: 'Payment method deleted successfully',
			});
	} catch (error) {
		next(error);
	}
};

module.exports = router;
