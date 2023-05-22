import AuthService from "../../services/auth.service";
const service = new AuthService();

const login = async (
	_: any,
	{ email, password }: { email: User; password: User }
) => {};

export { login };
