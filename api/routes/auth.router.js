const express = require('express');

const AuthService = require('../services/auth.service');

const router = express.Router();
const service = new AuthService();

router.post('/login', login);
router.post('/recover', recover);
router.post('/change-password', changePassword);

/**
 * Authenticates a user via passport local strategy and signs
 * a JWT token with the user information to define its role
 */
const login = async (req, res, next) => {
	try {
		const user = req.user;
		res.status(201).json(service.signToken(user));
	} catch (error) {
		next(error);
	}
};

/**
 * Sends a recovery email to the user with a link to change the password
 */
const recover = async (req, res, next) => {
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
const changePassword = async (req, res, next) => {
	try {
		const { token, newPassword } = req.body;
		const response = await service.changePassword(token, newPassword);
		res.json(response);
	} catch (error) {
		next(error);
	}
};

module.exports = router;
