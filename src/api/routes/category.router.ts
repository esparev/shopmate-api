import express, { Router, Request, Response, NextFunction } from "express";
import CategoryService from "../services/category.service";

import {
	getCategorySchema,
	createCategorySchema,
	updateCategorySchema,
} from "../schemas/category.schema";

const router: Router = express.Router();
const service = new CategoryService();

/**
 * Get all categories from the database using the category service
 */
const getCategories = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const categories = await service.find();
		res.status(200).json(categories);
	} catch (error) {
		next(error);
	}
};

/**
 * Get a category from the database using the category service
 */
const getCategory = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;
		const category = await service.findOne(id);
		res.status(200).json(category);
	} catch (error) {
		next(error);
	}
};

/**
 * Add a category to the database using the category service
 */
const createCategory = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { body: category } = req;
		const newCategory = await service.create(category);
		res
			.status(201)
			.json({ newCategory, message: "Category created successfully" });
	} catch (error) {
		next(error);
	}
};

/**
 * Update a category in the database using the category service
 */
const updateCategory = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;
		const { body: category } = req;
		const updatedCategory = await service.update(id, category);
		res
			.status(200)
			.json({ updatedCategory, message: "Category updated successfully" });
	} catch (error) {
		next(error);
	}
};

/**
 * Delete a category from the database using the category service
 */
const deleteCategory = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;
		const deletedCategory = await service.delete(id);
		res
			.status(200)
			.json({ deletedCategory, message: "Category deleted successfully" });
	} catch (error) {
		next(error);
	}
};

router.get("/", getCategories);
router.get("/:id", getCategory);
router.post("/", createCategory);
router.patch("/:id", updateCategory);
router.delete("/:id", deleteCategory);

export default router;
