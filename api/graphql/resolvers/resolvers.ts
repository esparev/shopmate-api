import { login } from './auth.resolvers';
import { cart, carts, createCart, updateCart, deleteCart } from './cart.resolvers'; // prettier-ignore
import { category, categories, createCategory, updateCategory, deleteCategory } from './category.resolvers'; // prettier-ignore
import { openingHour, openingHours, createOpeningHour, updateOpeningHour, deleteOpeningHour } from './opening-hours.resolvers'; // prettier-ignore
import { order, orders, createOrder, updateOrder, deleteOrder } from './order.resolvers'; // prettier-ignore
import { paymentMethod, paymentMethods, createPaymentMethod, updatePaymentMethod, deletePaymentMethod } from './payment-method.resolvers'; // prettier-ignore
import { product, products, createProduct, updateProduct, deleteProduct } from './product.resolvers'; // prettier-ignore
import { shoplist, shoplists, createShoplist, updateShoplist, deleteShoplist } from './shoplist.resolvers'; // prettier-ignore
import { store, stores, createStore, updateStore, deleteStore } from './store.resolvers'; // prettier-ignore
import { user, users, createUser, updateUser, deleteUser } from './user.resolvers'; // prettier-ignore

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

export default resolvers;
