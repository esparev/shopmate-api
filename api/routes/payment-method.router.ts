import express, { Router, Request, Response, NextFunction } from "express";
import PaymentMethodService from "../services/payment-method.service";

import {
	getPaymentMethodSchema,
	createPaymentMethodSchema,
	updatePaymentMethodSchema,
} from "../schemas/payment-method.schema";

const router: Router = express.Router();
const service = new PaymentMethodService();

/**
 * Get all payment methods from the database using the payment method service
 */
const getPaymentMethods = async (req: Request, res: Response, next: NextFunction) => {
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
const getPaymentMethod = async (req: Request, res: Response, next: NextFunction) => {
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
const createPaymentMethod = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { body: paymentMethod } = req;
		const newPaymentMethod = await service.create(paymentMethod);
		res.status(201).json({
			newPaymentMethod,
			message: "Payment method created successfully",
		});
	} catch (error) {
		next(error);
	}
};

/**
 * Update a payment method in the database using the payment method service
 */
const updatePaymentMethod = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;
		const { body: paymentMethod } = req;
		const updatedPaymentMethod = await service.update(id, paymentMethod);
		res.status(200).json({
			updatedPaymentMethod,
			message: "Payment method updated successfully",
		});
	} catch (error) {
		next(error);
	}
};

/**
 * Delete a payment method from the database using the payment method service
 */
const deletePaymentMethod = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;
		const deletedPaymentMethod = await service.delete(id);
		res.status(200).json({
			deletedPaymentMethod,
			message: "Payment method deleted successfully",
		});
	} catch (error) {
		next(error);
	}
};

router.get("/", getPaymentMethods);
router.get("/:id", getPaymentMethod);
router.post("/", createPaymentMethod);
router.patch("/:id", updatePaymentMethod);
router.delete("/:id", deletePaymentMethod);

export default router;
