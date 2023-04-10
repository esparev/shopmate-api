const Joi = require('joi');

const id = Joi.string().uuid({ version: 'uuidv4' });
const username = Joi.string().min(3).max(30);
const firstName = Joi.string().min(3);
const lastName = Joi.string().min(3);
const email = Joi.string().email();
const password = Joi.string().min(8);
const role = Joi.string().valid('admin', 'user');
const avatar = Joi.string().uri();

/**
 * Schema to validate the getUser request
 */
const getUserSchema = Joi.object({
	id: id.required() || username.required(),
});

/**
 * Schema to validate the createUser request
 */
const createUserSchema = Joi.object({
	username: username.required(),
	firstName: firstName.required(),
	lastName: lastName.required(),
	email: email.required(),
	password: password.required(),
	role: role.required(),
	avatar,
});

/**
 * Schema to validate the updateUser request
 */
const updateUserSchema = Joi.object({
	username,
	firstName,
	lastName,
	email,
	password,
	avatar,
});

module.exports = { getUserSchema, createUserSchema, updateUserSchema };
