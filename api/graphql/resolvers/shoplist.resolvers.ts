import ShoplistService from "../../services/shoplist.service";
const service = new ShoplistService();

/**
 * Finds all shoplists in the array of objects
 */
const shoplists = () => {
	return service.find();
};

/**
 * Finds the shoplist with the provided id
 */
const shoplist = (_: any, { id }: Shoplist) => {
	return service.findOne(id);
};

/**
 * Creates a shoplist with the provided data
 */
const createShoplist = (_: any, { data }: { data: Shoplist }) => {
	return service.create(data);
};

/**
 * Updates the shoplist with the provided id
 */
const updateShoplist = (_: any, { id, data }: Shoplist & { data: Shoplist }) => {
	return service.update(id, data);
};

/**
 * Deletes the shoplist with the provided id
 */
const deleteShoplist = async (_: any, { id }: Shoplist) => {
	await service.delete(id);
	return id;
};

export { shoplists, shoplist, createShoplist, updateShoplist, deleteShoplist };
