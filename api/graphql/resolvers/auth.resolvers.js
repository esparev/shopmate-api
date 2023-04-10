const AuthService = require('../../services/auth.service');
const service = new AuthService();

const login = async (_, { email, password }) => {};

module.exports = { login };
