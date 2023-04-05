const express = require('express');

const OrderService = require('../services/order.service');
const {
	getOrderSchema,
	createOrderSchema,
	updateOrderSchema,
} = require('../schemas/order.schema');

const router = express.Router();
const service = new OrderService();

router.get('/', getOrders);
router.get('/:id', getOrder);
router.post('/', createOrder);
router.patch('/:id', updateOrder);
router.delete('/:id', deleteOrder);

/**
 * Get all orders from the database using the order service
 */
const getOrders = async (req, res, next) => {
	try {
		const orders = await service.find();
		res.status(200).json(orders);
	} catch (error) {
		next(error);
	}
};

/**
 * Get an order from the database using the order service
 */
const getOrder = async (req, res, next) => {
	try {
		const { id } = req.params;
		const order = await service.findOne(id);
		res.status(200).json(order);
	} catch (error) {
		next(error);
	}
};

/**
 * Add an order to the database using the order service
 */
const createOrder = async (req, res, next) => {
	try {
		const { body: order } = req;
		const newOrder = await service.create(order);
		res.status(201).json({ newOrder, message: 'Order created successfully' });
	} catch (error) {
		next(error);
	}
};

/**
 * Update an order in the database using the order service
 */
const updateOrder = async (req, res, next) => {
	try {
		const { id } = req.params;
		const { body: order } = req;
		const updatedOrder = await service.update(id, order);
		res
			.status(200)
			.json({ updatedOrder, message: 'Order updated successfully' });
	} catch (error) {
		next(error);
	}
};

/**
 * Delete an order from the database using the order service
 */
const deleteOrder = async (req, res, next) => {
	try {
		const { id } = req.params;
		const deletedOrder = await service.delete(id);
		res
			.status(200)
			.json({ deletedOrder, message: 'Order deleted successfully' });
	} catch (error) {
		next(error);
	}
};

module.exports = router;
