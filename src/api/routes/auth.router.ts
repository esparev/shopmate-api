import express, { Router, Request, Response, NextFunction } from "express";
import AuthService from "../services/auth.service";

const router: Router = express.Router();
const service = new AuthService();

/**
 * Authenticates a user via passport local strategy and signs
 * a JWT token with the user information to define its role
 */
const login = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const user = req.user as User;
		res.status(201).json(service.signToken(user));
	} catch (error) {
		next(error);
	}
};

/**
 * Sends a recovery email to the user with a link to change the password
 */
const recover = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { email } = req.body;
		const response = await service.sendRecovery(email);
		res.json(response);
	} catch (error) {
		next(error);
	}
};

/**
 * Changes the password of a user using the token sent to the email
 */
const changePassword = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { token, newPassword } = req.body;
		const response = await service.changePassword(token, newPassword);
		res.json(response);
	} catch (error) {
		next(error);
	}
};

router.post("/login", login);
router.post("/recover", recover);
router.post("/change-password", changePassword);

export default router;
