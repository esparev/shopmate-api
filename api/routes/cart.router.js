const express = require('express');

const CartService = require('../services/cart.service');
const {
	getCartSchema,
	createCartSchema,
	updateCartSchema,
} = require('../schemas/cart.schema');

const router = express.Router();
const service = new CartService();

router.get('/', getCarts);
router.get('/:id', getCart);
router.post('/', createCart);
router.patch('/:id', updateCart);
router.delete('/:id', deleteCart);

/**
 * Get all carts from the database using the cart service
 */
const getCarts = async (req, res, next) => {
	try {
		const carts = await service.find();
		res.status(200).json(carts);
	} catch (error) {
		next(error);
	}
};

/**
 * Get a cart from the database using the cart service
 */
const getCart = async (req, res, next) => {
	try {
		const { id } = req.params;
		const cart = await service.findOne(id);
		res.status(200).json(cart);
	} catch (error) {
		next(error);
	}
};

/**
 * Add a cart to the database using the cart service
 */
const createCart = async (req, res, next) => {
	try {
		const { body: cart } = req;
		const newCart = await service.create(cart);
		res.status(201).json({ newCart, message: 'Cart created successfully' });
	} catch (error) {
		next(error);
	}
};

/**
 * Update a cart in the database using the cart service
 */
const updateCart = async (req, res, next) => {
	try {
		const { id } = req.params;
		const { body: cart } = req;
		const updatedCart = await service.update(id, cart);
		res.status(200).json({ updatedCart, message: 'Cart updated successfully' });
	} catch (error) {
		next(error);
	}
};

/**
 * Delete a cart from the database using the cart service
 */
const deleteCart = async (req, res, next) => {
	try {
		const { id } = req.params;
		const deletedCart = await service.delete(id);
		res.status(200).json({ deletedCart, message: 'Cart deleted successfully' });
	} catch (error) {
		next(error);
	}
};

module.exports = router;
