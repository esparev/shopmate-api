import express, { Router, Request, Response, NextFunction } from "express";
import OpeningHourService from "../services/opening-hours.service";

import {
	getOpeningHoursSchema,
	createOpeningHoursSchema,
	updateOpeningHoursSchema,
} from "../schemas/opening-hours.schema";

const router: Router = express.Router();
const service = new OpeningHourService();

/**
 * Get all opening hours from the database using the opening hour service
 */
const getOpeningHours = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const openingHours = await service.find();
		res.status(200).json(openingHours);
	} catch (error) {
		next(error);
	}
};

/**
 * Get an opening hour from the database using the opening hour service
 */
const getOpeningHour = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;
		const openingHour = await service.findOne(id);
		res.status(200).json(openingHour);
	} catch (error) {
		next(error);
	}
};

/**
 * Add an opening hour to the database using the opening hour service
 */
const createOpeningHour = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { body: openingHour } = req;
		const newOpeningHour = await service.create(openingHour);
		res
			.status(201)
			.json({ newOpeningHour, message: "Opening hour created successfully" });
	} catch (error) {
		next(error);
	}
};

/**
 * Update an opening hour in the database using the opening hour service
 */
const updateOpeningHour = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;
		const { body: openingHour } = req;
		const updatedOpeningHour = await service.update(id, openingHour);
		res.status(200).json({
			updatedOpeningHour,
			message: "Opening hour updated successfully",
		});
	} catch (error) {
		next(error);
	}
};

/**
 * Delete an opening hour from the database using the opening hour service
 */
const deleteOpeningHour = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;
		const deletedOpeningHour = await service.delete(id);
		res.status(200).json({
			deletedOpeningHour,
			message: "Opening hour deleted successfully",
		});
	} catch (error) {
		next(error);
	}
};

router.get("/", getOpeningHours);
router.get("/:id", getOpeningHour);
router.post("/", createOpeningHour);
router.patch("/:id", updateOpeningHour);
router.delete("/:id", deleteOpeningHour);

export default router;
