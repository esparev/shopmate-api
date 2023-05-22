import express, { Router, Request, Response, NextFunction } from "express";
import CartService from "../services/cart.service";

import {
	getCartSchema,
	createCartSchema,
	updateCartSchema,
} from "../schemas/cart.schema";

const router: Router = express.Router();
const service = new CartService();

/**
 * Get all carts from the database using the cart service
 */
const getCarts = async (req: Request, res: Response, next: NextFunction) => {
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
const getCart = async (req: Request, res: Response, next: NextFunction) => {
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
const createCart = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { body: cart } = req;
		const newCart = await service.create(cart);
		res.status(201).json({ newCart, message: "Cart created successfully" });
	} catch (error) {
		next(error);
	}
};

/**
 * Update a cart in the database using the cart service
 */
const updateCart = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;
		const { body: cart } = req;
		const updatedCart = await service.update(id, cart);
		res.status(200).json({ updatedCart, message: "Cart updated successfully" });
	} catch (error) {
		next(error);
	}
};

/**
 * Delete a cart from the database using the cart service
 */
const deleteCart = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;
		const deletedCart = await service.delete(id);
		res.status(200).json({ deletedCart, message: "Cart deleted successfully" });
	} catch (error) {
		next(error);
	}
};

router.get("/", getCarts);
router.get("/:id", getCart);
router.post("/", createCart);
router.patch("/:id", updateCart);
router.delete("/:id", deleteCart);

export default router;
