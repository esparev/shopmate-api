import express, { Router, Request, Response, NextFunction } from "express";
import OrderService from "../services/order.service";

import {
	getOrderSchema,
	createOrderSchema,
	updateOrderSchema,
} from "../schemas/order.schema";

const router: Router = express.Router();
const service = new OrderService();

/**
 * Get all orders from the database using the order service
 */
const getOrders = async (req: Request, res: Response, next: NextFunction) => {
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
const getOrder = async (req: Request, res: Response, next: NextFunction) => {
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
const createOrder = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { body: order } = req;
		const newOrder = await service.create(order);
		res.status(201).json({ newOrder, message: "Order created successfully" });
	} catch (error) {
		next(error);
	}
};

/**
 * Update an order in the database using the order service
 */
const updateOrder = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;
		const { body: order } = req;
		const updatedOrder = await service.update(id, order);
		res
			.status(200)
			.json({ updatedOrder, message: "Order updated successfully" });
	} catch (error) {
		next(error);
	}
};

/**
 * Delete an order from the database using the order service
 */
const deleteOrder = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;
		const deletedOrder = await service.delete(id);
		res
			.status(200)
			.json({ deletedOrder, message: "Order deleted successfully" });
	} catch (error) {
		next(error);
	}
};

router.get("/", getOrders);
router.get("/:id", getOrder);
router.post("/", createOrder);
router.patch("/:id", updateOrder);
router.delete("/:id", deleteOrder);

export default router;
