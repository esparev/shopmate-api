import express, { Router, Request, Response, NextFunction } from "express";
import UserService from "../services/user.service";

import {
	getUserSchema,
	createUserSchema,
	updateUserSchema,
} from "../schemas/user.schema";

const router: Router = express.Router();
const service = new UserService();

/**
 * Get all users from the database using the user service
 */
const getUsers = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const users = await service.find();
		res.status(200).json(users);
	} catch (error) {
		next(error);
	}
};

/**
 * Get a user from the database using the user service
 */
const getUser = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;
		const user = await service.findOne(id);
		res.status(200).json(user);
	} catch (error) {
		next(error);
	}
};

/**
 * Add a user to the database using the user service
 */
const createUser = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { body: user } = req;
		const newUser = await service.create(user);
		res.status(201).json({ newUser, message: "User created successfully" });
	} catch (error) {
		next(error);
	}
};

/**
 * Update a user in the database using the user service
 */
const updateUser = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;
		const { body: user } = req;
		const updatedUser = await service.update(id, user);
		res.status(200).json({ updatedUser, message: "User updated successfully" });
	} catch (error) {
		next(error);
	}
};

/**
 * Delete a user from the database using the user service
 */
const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;
		const deletedUser = await service.delete(id);
		res.status(200).json({ deletedUser, message: "User deleted successfully" });
	} catch (error) {
		next(error);
	}
};

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", createUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
