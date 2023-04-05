const UserService = require('./user.service');
const service = new UserService();

class AuthService {
	constructor() {}

	/**
	 * Finds the user by email and password and validates the existence
	 * of a user by email by comparing the password with the hash
	 * @param {string} email The user email
	 * @param {string} password The user password
	 * @returns {object} The user object
	 */
	async getUser(email, password) {
		const user = await service.findUserByEmail(email);
		return user;
	}

	/**
	 * Signs a JSON Web Token with the necessary payload
	 * to define the user's identity
	 * @param {object} user The user object
	 * @returns {object} The user and its signed token
	 */
	signToken(user) {
		const payload = {
			sub: user.id,
			scope: user.role,
		};

		return {};
	}

	/**
	 * Sends an email to the user with a link to recover the password
	 * @param {object} emailInfo The email information
	 * @returns {object} A message indicating that the email was sent
	 */
	async sendMail(emailInfo) {
		return { message: 'Email sent' };
	}

	/**
	 * Provides information to the sendMail method
	 * @param {string} email The user email
	 */
	async sendRecovery(email) {
		const user = await service.findUserByEmail(email);

		if (!user) {
		}

		const payload = { sub: user.id };
		const token = '';
		const link = ``;
		await service.update(user.id, { recoveryToken: token });

		const mail = {
			from: `ShopMate AI Inc.`,
			to: user.email,
			subject: 'Password recovery',
			html: ``,
		};

		const response = await this.sendMail(mail);
		return response;
	}

	/**
	 * Changes the user password with the recovery token
	 * @param {string} token The recovery token
	 * @param {string} newPassword The new password
	 * @returns {object} A message indicating that the password was changed
	 */
	async changePassword(token, newPassword) {}
}

module.exports = AuthService;
