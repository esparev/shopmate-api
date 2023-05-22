import UserService from "../../services/user.service";
const service = new UserService();

/**
 * Finds all users in the array of objects
 */
const users = () => {
	return service.find();
};

/**
 * Finds the user with the provided id
 */
const user = (_: any, { id }: User) => {
	return service.findOne(id);
};

/**
 * Creates a user with the provided data
 */
const createUser = (_: any, { data }: { data: User }) => {
	return service.create(data);
};

/**
 * Updates the user with the provided id
 */
const updateUser = (_: any, { id, data }: User & { data: User }) => {
	return service.update(id, data);
};

/**
 * Deletes the user with the provided id
 */
const deleteUser = async (_: any, { id }: User) => {
	await service.delete(id);
	return id;
};

export { users, user, createUser, updateUser, deleteUser };
