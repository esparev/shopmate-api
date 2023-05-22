import CartService from "../../services/cart.service";
const service = new CartService();

/**
 * Finds all carts in the array of objects
 */
const carts = () => {
	return service.find();
};

/**
 * Finds the cart with the provided id
 */
const cart = (_: any, { id }: Cart) => {
	return service.findOne(id);
};

/**
 * Creates a cart with the provided data
 */
const createCart = (_: any, { data }: { data: Cart }) => {
	return service.create(data);
};

/**
 * Updates the cart with the provided id
 */
const updateCart = (_: any, { id, data }: Cart & { data: Cart }) => {
	return service.update(id, data);
};

/**
 * Deletes the cart with the provided id
 */
const deleteCart = async (_: any, { id }: Cart) => {
	await service.delete(id);
	return id;
};

export { carts, cart, createCart, updateCart, deleteCart };
