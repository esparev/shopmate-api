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
import { TableNames } from "../../../types/definitions";

module.exports = {
	async up(queryInterface: QueryInterface, Sequelize: Sequelize) {
		await queryInterface.createTable(TableNames.UserTable, UserSchema);
		await queryInterface.createTable(TableNames.StoreTable, StoreSchema);
		await queryInterface.createTable(TableNames.CategoryTable, CategorySchema);
		await queryInterface.createTable(TableNames.ProductTable, ProductSchema);
		await queryInterface.createTable(TableNames.CartTable, CartSchema);
		await queryInterface.createTable(TableNames.ShoplistTable, ShoplistSchema);
		await queryInterface.createTable(
			TableNames.OpeningHoursTable,
			OpeningHoursSchema
		);
		await queryInterface.createTable(
			TableNames.PaymentMethodTable,
			PaymentMethodSchema
		);
		await queryInterface.createTable(TableNames.OrderTable, OrderSchema);
		await queryInterface.createTable(TableNames.CartItemTable, CartItemSchema);
		await queryInterface.createTable(
			TableNames.OrderItemTable,
			OrderItemSchema
		);
		await queryInterface.createTable(
			TableNames.ShoplistItemTable,
			ShoplistItemSchema
		);
	},

	async down(queryInterface: QueryInterface, Sequelize: Sequelize) {
		await queryInterface.dropTable(TableNames.CartItemTable);
		await queryInterface.dropTable(TableNames.OrderItemTable);
		await queryInterface.dropTable(TableNames.ShoplistItemTable);
		await queryInterface.dropTable(TableNames.OpeningHoursTable);
		await queryInterface.dropTable(TableNames.OrderTable);
		await queryInterface.dropTable(TableNames.PaymentMethodTable);
		await queryInterface.dropTable(TableNames.ProductTable);
		await queryInterface.dropTable(TableNames.ShoplistTable);
		await queryInterface.dropTable(TableNames.CartTable);
		await queryInterface.dropTable(TableNames.StoreTable);
		await queryInterface.dropTable(TableNames.CategoryTable);
		await queryInterface.dropTable(TableNames.UserTable);
	},
};
