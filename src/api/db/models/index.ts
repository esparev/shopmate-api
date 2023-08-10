import { Sequelize } from "sequelize";
import { Cart, CartSchema } from "./cart.model";
import { CartItem, CartItemSchema } from "./cart-items.model";
import { Category, CategorySchema } from "./category.model";
import { OpeningHours, OpeningHoursSchema } from "./opening-hours.model";
import { Order, OrderSchema } from "./order.model";
import { OrderItem, OrderItemSchema } from "./order-items.model";
import { PaymentMethod, PaymentMethodSchema } from "./payment-method.model";
import { Product, ProductSchema } from "./product.model";
import { Shoplist, ShoplistSchema } from "./shoplist.model";
import { ShoplistItem, ShoplistItemSchema } from "./shoplist-items.model";
import { Store, StoreSchema } from "./store.model";
import { User, UserSchema } from "./user.model";
import { TableNames } from "../tables";

function setupModels(sequelize: Sequelize) {
	User.init(UserSchema, User.config(sequelize));
	Store.init(StoreSchema, Store.config(sequelize));
	Category.init(CategorySchema, Category.config(sequelize));
	Product.init(
		ProductSchema(TableNames.STORE_TABLE, TableNames.CATEGORY_TABLE),
		Product.config(sequelize)
	);
	Cart.init(
		CartSchema(TableNames.STORE_TABLE, TableNames.USER_TABLE),
		Cart.config(sequelize)
	);
	Shoplist.init(
		ShoplistSchema(TableNames.USER_TABLE),
		Shoplist.config(sequelize)
	);
	OpeningHours.init(
		OpeningHoursSchema(TableNames.STORE_TABLE),
		OpeningHours.config(sequelize)
	);
	PaymentMethod.init(
		PaymentMethodSchema(TableNames.USER_TABLE),
		PaymentMethod.config(sequelize)
	);
	Order.init(
		OrderSchema(
			TableNames.USER_TABLE,
			TableNames.STORE_TABLE,
			TableNames.CART_TABLE,
			TableNames.PAYMENT_METHOD_TABLE
		),
		Order.config(sequelize)
	);
	CartItem.init(
		CartItemSchema(TableNames.CART_TABLE, TableNames.PRODUCT_TABLE),
		CartItem.config(sequelize)
	);
	OrderItem.init(
		OrderItemSchema(TableNames.ORDER_TABLE, TableNames.PRODUCT_TABLE),
		OrderItem.config(sequelize)
	);
	ShoplistItem.init(
		ShoplistItemSchema(TableNames.SHOPLIST_TABLE, TableNames.PRODUCT_TABLE),
		ShoplistItem.config(sequelize)
	);

	User.associate();
	Store.associate();
	Category.associate();
	Product.associate();
	Cart.associate();
	Shoplist.associate();
	OpeningHours.associate();
	PaymentMethod.associate();
	Order.associate();
	// CartItem.associate();
	// OrderItem.associate();
	// ShoplistItem.associate();
}

export default setupModels;
