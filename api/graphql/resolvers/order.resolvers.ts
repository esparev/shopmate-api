import OrderService from "../../services/order.service";
const service = new OrderService();

/**
 * Finds all orders in the array of objects
 */
const orders = () => {
	return service.find();
};

/**
 * Finds the order with the provided id
 */
const order = (_: any, { id }: Order) => {
	return service.findOne(id);
};

/**
 * Creates a order with the provided data
 */
const createOrder = (_: any, { data }: { data: Order }) => {
	return service.create(data);
};

/**
 * Updates the order with the provided id
 */
const updateOrder = (_: any, { id, data }: Order & { data: Order }) => {
	return service.update(id, data);
};

/**
 * Deletes the order with the provided id
 */
const deleteOrder = async (_: any, { id }: Order) => {
	await service.delete(id);
	return id;
};

export { orders, order, createOrder, updateOrder, deleteOrder };
