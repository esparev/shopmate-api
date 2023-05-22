import express, { Router, Request, Response, NextFunction } from "express";
import ShoplistService from "../services/shoplist.service";

import {
	getShoplistSchema,
	createShoplistSchema,
	updateShoplistSchema,
} from "../schemas/shoplist.schema";

const router: Router = express.Router();
const service = new ShoplistService();

/**
 * Get all shoplists from the database using the shoplist service
 */
const getShoplists = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const shoplists = await service.find();
		res.status(200).json(shoplists);
	} catch (error) {
		next(error);
	}
};

/**
 * Get a shoplist from the database using the shoplist service
 */
const getShoplist = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;
		const shoplist = await service.findOne(id);
		res.status(200).json(shoplist);
	} catch (error) {
		next(error);
	}
};

/**
 * Add a shoplist to the database using the shoplist service
 */
const createShoplist = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { body: shoplist } = req;
		const newShoplist = await service.create(shoplist);
		res.status(201).json({
			newShoplist,
			message: "Shoplist created successfully",
		});
	} catch (error) {
		next(error);
	}
};

/**
 * Update a shoplist in the database using the shoplist service
 */
const updateShoplist = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;
		const { body: shoplist } = req;
		const updatedShoplist = await service.update(id, shoplist);
		res.status(200).json({
			updatedShoplist,
			message: "Shoplist updated successfully",
		});
	} catch (error) {
		next(error);
	}
};

/**
 * Delete a shoplist from the database using the shoplist service
 */
const deleteShoplist = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;
		const deletedShoplist = await service.delete(id);
		res.status(200).json({
			deletedShoplist,
			message: "Shoplist deleted successfully",
		});
	} catch (error) {
		next(error);
	}
};

router.get("/", getShoplists);
router.get("/:id", getShoplist);
router.post("/", createShoplist);
router.patch("/:id", updateShoplist);
router.delete("/:id", deleteShoplist);

export default router;
