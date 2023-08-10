import CategoryService from "../../services/category.service";
const service = new CategoryService();

/**
 * Finds all categories in the array of objects
 */
const categories = () => {
	return service.find();
};

/**
 * Finds the category with the provided id
 */
const category = (_: any, { id }: Category) => {
	return service.findOne(id);
};

/**
 * Creates a category with the provided data
 */
const createCategory = (_: any, { data }: { data: Category }) => {
	return service.create(data);
};

/**
 * Updates the category with the provided id
 */
const updateCategory = (_: any, { id, data }: Category & { data: Category }) => {
	return service.update(id, data);
};

/**
 * Deletes the category with the provided id
 */
const deleteCategory = async (_: any, { id }: Category) => {
	await service.delete(id);
	return id;
};

export { categories, category, createCategory, updateCategory, deleteCategory };
