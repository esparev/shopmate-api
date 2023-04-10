const { login } = require('./auth.resolvers');
const { cart, carts, createCart, updateCart, deleteCart } = require('./cart.resolvers'); // prettier-ignore
const { category, categories, createCategory, updateCategory, deleteCategory } = require('./category.resolvers'); // prettier-ignore
const { openingHour, openingHours, createOpeningHour, updateOpeningHour, deleteOpeningHour } = require('./opening-hours.resolvers'); // prettier-ignore
const { order, orders, createOrder, updateOrder, deleteOrder } = require('./order.resolvers'); // prettier-ignore
const { paymentMethod, paymentMethods, createPaymentMethod, updatePaymentMethod, deletePaymentMethod } = require('./payment-method.resolvers'); // prettier-ignore
const { product, products, createProduct, updateProduct, deleteProduct } = require('./product.resolvers'); // prettier-ignore
const { shoplist, shoplists, createShoplist, updateShoplist, deleteShoplist } = require('./shoplist.resolvers'); // prettier-ignore
const { store, stores, createStore, updateStore, deleteStore } = require('./store.resolvers'); // prettier-ignore
const { user, users, createUser, updateUser, deleteUser } = require('./user.resolvers'); // prettier-ignore

// prettier-ignore
const resolvers = {
	Query: {
		cart, carts,
		category, categories,
		openingHour, openingHours,
		order, orders,
		paymentMethod, paymentMethods,
		product, products,
		shoplist, shoplists,
		store, stores,
		user, users
	},
	Mutation: {
		login,
		createCart, updateCart, deleteCart,
		createCategory, updateCategory, deleteCategory,
		createOpeningHour, updateOpeningHour, deleteOpeningHour,
		createOrder, updateOrder, deleteOrder,
		createPaymentMethod, updatePaymentMethod, deletePaymentMethod,
		createProduct, updateProduct, deleteProduct,
		createShoplist, updateShoplist, deleteShoplist,
		createStore, updateStore, deleteStore,
		createUser, updateUser, deleteUser,
	},
};

module.exports = resolvers;
