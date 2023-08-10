import express, { Router, Request, Response, NextFunction } from "express";
import StoreService from "../services/store.service";

import {
	getStoreSchema,
	createStoreSchema,
	updateStoreSchema,
} from "../schemas/store.schema";

const router: Router = express.Router();
const service = new StoreService();

/**
 * Get all stores from the database using the store service
 */
const getStores = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const stores = await service.find();
		res.status(200).json(stores);
	} catch (error) {
		next(error);
	}
};

/**
 * Get a store from the database using the store service
 */
const getStore = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;
		const store = await service.findOne(id);
		res.status(200).json(store);
	} catch (error) {
		next(error);
	}
};

/**
 * Add a store to the database using the store service
 */
const createStore = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { body: store } = req;
		const newStore = await service.create(store);
		res.status(201).json({ newStore, message: "Store created successfully" });
	} catch (error) {
		next(error);
	}
};

/**
 * Update a store in the database using the store service
 */
const updateStore = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;
		const { body: store } = req;
		const updatedStore = await service.update(id, store);
		res
			.status(200)
			.json({ updatedStore, message: "Store updated successfully" });
	} catch (error) {
		next(error);
	}
};

/**
 * Delete a store from the database using the store service
 */
const deleteStore = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;
		const deletedStore = await service.delete(id);
		res
			.status(200)
			.json({ deletedStore, message: "Store deleted successfully" });
	} catch (error) {
		next(error);
	}
};

router.get("/", getStores);
router.get("/:id", getStore);
router.post("/", createStore);
router.patch("/:id", updateStore);
router.delete("/:id", deleteStore);

export default router;
