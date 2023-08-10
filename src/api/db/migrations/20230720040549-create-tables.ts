import { QueryInterface, Sequelize } from "sequelize";
import { CartItemSchema } from "../models/cart-items.model";
import { CartSchema } from "../models/cart.model";
import { CategorySchema } from "../models/category.model";
import { OpeningHoursSchema } from "../models/opening-hours.model";
import { OrderItemSchema } from "../models/order-items.model";
import { OrderSchema } from "../models/order.model";
import { PaymentMethodSchema } from "../models/payment-method.model";
import { ProductSchema } from "../models/product.model";
import { ShoplistItemSchema } from "../models/shoplist-items.model";
import { ShoplistSchema } from "../models/shoplist.model";
import { StoreSchema } from "../models/store.model";
import { UserSchema } from "../models/user.model";
import { TableNames } from "../tables";

module.exports = {
	async up(queryInterface: QueryInterface, Sequelize: Sequelize) {
		await queryInterface.createTable(TableNames.USER_TABLE, UserSchema);
		await queryInterface.createTable(TableNames.STORE_TABLE, StoreSchema);
		await queryInterface.createTable(TableNames.CATEGORY_TABLE, CategorySchema);
		await queryInterface.createTable(
			TableNames.PRODUCT_TABLE,
			ProductSchema(TableNames.STORE_TABLE, TableNames.CATEGORY_TABLE)
		);
		await queryInterface.createTable(
			TableNames.CART_TABLE,
			CartSchema(TableNames.STORE_TABLE, TableNames.USER_TABLE)
		);
		await queryInterface.createTable(
			TableNames.SHOPLIST_TABLE,
			ShoplistSchema(TableNames.USER_TABLE)
		);
		await queryInterface.createTable(
			TableNames.OPENING_HOURS_TABLE,
			OpeningHoursSchema(TableNames.STORE_TABLE)
		);
		await queryInterface.createTable(
			TableNames.PAYMENT_METHOD_TABLE,
			PaymentMethodSchema(TableNames.USER_TABLE)
		);
		await queryInterface.createTable(
			TableNames.ORDER_TABLE,
			OrderSchema(
				TableNames.USER_TABLE,
				TableNames.STORE_TABLE,
				TableNames.CART_TABLE,
				TableNames.PAYMENT_METHOD_TABLE
			)
		);
		await queryInterface.createTable(
			TableNames.CART_ITEM_TABLE,
			CartItemSchema(TableNames.CART_TABLE, TableNames.PRODUCT_TABLE)
		);
		await queryInterface.createTable(
			TableNames.ORDER_ITEM_TABLE,
			OrderItemSchema(TableNames.ORDER_TABLE, TableNames.PRODUCT_TABLE)
		);
		await queryInterface.createTable(
			TableNames.SHOPLIST_ITEM_TABLE,
			ShoplistItemSchema(TableNames.SHOPLIST_TABLE, TableNames.PRODUCT_TABLE)
		);
	},

	async down(queryInterface: QueryInterface, Sequelize: Sequelize) {
		await queryInterface.dropTable(TableNames.CART_ITEM_TABLE);
		await queryInterface.dropTable(TableNames.ORDER_ITEM_TABLE);
		await queryInterface.dropTable(TableNames.SHOPLIST_ITEM_TABLE);
		await queryInterface.dropTable(TableNames.OPENING_HOURS_TABLE);
		await queryInterface.dropTable(TableNames.PAYMENT_METHOD_TABLE);
		await queryInterface.dropTable(TableNames.PRODUCT_TABLE);
		await queryInterface.dropTable(TableNames.SHOPLIST_TABLE);
		await queryInterface.dropTable(TableNames.ORDER_TABLE);
		await queryInterface.dropTable(TableNames.CART_TABLE);
		await queryInterface.dropTable(TableNames.STORE_TABLE);
		await queryInterface.dropTable(TableNames.CATEGORY_TABLE);
		await queryInterface.dropTable(TableNames.USER_TABLE);
	},
};
