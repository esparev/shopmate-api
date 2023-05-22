import StoreService from "../../services/store.service";
const service = new StoreService();

/**
 * Finds all stores in the array of objects
 */
const stores = () => {
	return service.find();
};

/**
 * Finds the store with the provided id
 */
const store = (_: any, { id }: Store) => {
	return service.findOne(id);
};

/**
 * Creates a store with the provided data
 */
const createStore = (_: any, { data }: { data: Store }) => {
	return service.create(data);
};

/**
 * Updates the store with the provided id
 */
const updateStore = (_: any, { id, data }: Store & { data: Store }) => {
	return service.update(id, data);
};

/**
 * Deletes the store with the provided id
 */
const deleteStore = async (_: any, { id }: Store) => {
	await service.delete(id);
	return id;
};

export { stores, store, createStore, updateStore, deleteStore };
