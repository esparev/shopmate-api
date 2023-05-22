import PaymentMethodService from "../../services/payment-method.service";
const service = new PaymentMethodService();

/**
 * Finds all payment methods in the array of objects
 */
const paymentMethods = () => {
	return service.find();
};

/**
 * Finds the payment method with the provided id
 */
const paymentMethod = (_: any, { id }: PaymentMethod) => {
	return service.findOne(id);
};

/**
 * Creates a payment method with the provided data
 */
const createPaymentMethod = (_: any, { data }: { data: PaymentMethod }) => {
	return service.create(data);
};

/**
 * Updates the payment method with the provided id
 */
const updatePaymentMethod = (
	_: any,
	{ id, data }: PaymentMethod & { data: PaymentMethod }
) => {
	return service.update(id, data);
};

/**
 * Deletes the payment method with the provided id
 */
const deletePaymentMethod = async (_: any, { id }: PaymentMethod) => {
	await service.delete(id);
	return id;
};

export {
	paymentMethods,
	paymentMethod,
	createPaymentMethod,
	updatePaymentMethod,
	deletePaymentMethod,
};
