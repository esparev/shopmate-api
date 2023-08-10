import express, { Router, Request, Response, NextFunction } from "express";
import ProductService from "../services/product.service";

import {
	getProductSchema,
	createProductSchema,
	updateProductSchema,
} from "../schemas/product.schema";

const router: Router = express.Router();
const service = new ProductService();

/**
 * Get all products from the database using the product service
 */
const getProducts = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const products = await service.find();
		res.status(200).json(products);
	} catch (error) {
		next(error);
	}
};

/**
 * Get a product from the database using the product service
 */
const getProduct = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;
		const product = await service.findOne(id);
		res.status(200).json(product);
	} catch (error) {
		next(error);
	}
};

/**
 * Add a product to the database using the product service
 */
const createProduct = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { body: product } = req;
		const newProduct = await service.create(product);
		res
			.status(201)
			.json({ newProduct, message: "Product created successfully" });
	} catch (error) {
		next(error);
	}
};

/**
 * Update a product in the database using the product service
 */
const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;
		const { body: product } = req;
		const updatedProduct = await service.update(id, product);
		res.status(200).json({
			updatedProduct,
			message: "Product updated successfully",
		});
	} catch (error) {
		next(error);
	}
};

/**
 * Delete a product from the database using the product service
 */
const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;
		const deletedProduct = await service.delete(id);
		res.status(200).json({
			deletedProduct,
			message: "Product deleted successfully",
		});
	} catch (error) {
		next(error);
	}
};

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", createProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
