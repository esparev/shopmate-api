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

function setupModels(sequelize: Sequelize) {
	User.init(UserSchema, User.config(sequelize));
	Store.init(StoreSchema, Store.config(sequelize));
	Category.init(CategorySchema, Category.config(sequelize));
	Product.init(ProductSchema, Product.config(sequelize));
	Cart.init(CartSchema, Cart.config(sequelize));
	Shoplist.init(ShoplistSchema, Shoplist.config(sequelize));
	OpeningHours.init(OpeningHoursSchema, OpeningHours.config(sequelize));
	PaymentMethod.init(PaymentMethodSchema, PaymentMethod.config(sequelize));
	Order.init(OrderSchema, Order.config(sequelize));
	CartItem.init(CartItemSchema, CartItem.config(sequelize));
	OrderItem.init(OrderItemSchema, OrderItem.config(sequelize));
	ShoplistItem.init(ShoplistItemSchema, ShoplistItem.config(sequelize));

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
