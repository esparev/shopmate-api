import ProductService from "../../services/product.service";
const service = new ProductService();

/**
 * Finds all products in the array of objects
 */
const products = () => {
	return service.find();
};

/**
 * Finds the product with the provided id
 */
const product = (_: any, { id }: Product) => {
	return service.findOne(id);
};

/**
 * Creates a product with the provided data
 */
const createProduct = (_: any, { data }: { data: Product }) => {
	return service.create(data);
};

/**
 * Updates the product with the provided id
 */
const updateProduct = (_: any, { id, data }: Product & { data: Product }) => {
	return service.update(id, data);
};

/**
 * Deletes the product with the provided id
 */
const deleteProduct = async (_: any, { id }: Product) => {
	await service.delete(id);
	return id;
};

export { products, product, createProduct, updateProduct, deleteProduct };
