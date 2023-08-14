import { Model, DataTypes, Sequelize } from "sequelize";
import modelOptions from "../../../utils/modelOptions";
import { Store } from "./store.model";
import { Category } from "./category.model";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import { Shoplist } from "./shoplist.model";
import { CartItem } from "./cart-items.model";
import { OrderItem } from "./order-items.model";
import { ShoplistItem } from "./shoplist-items.model";
import { TableNames } from "../../../types/definitions";

const options = modelOptions(TableNames.ProductTable);

const ProductSchema = {
	id: {
		allowNull: false,
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true,
	},
	name: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	description: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	price: {
		allowNull: false,
		type: DataTypes.FLOAT,
	},
	image: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	weight: {
		allowNull: false,
		type: DataTypes.FLOAT,
	},
	measurementUnit: {
		allowNull: false,
		field: "measurement_unit",
		type: DataTypes.STRING,
	},
	quantity: {
		allowNull: false,
		type: DataTypes.INTEGER,
	},
	storeId: {
		allowNull: false,
		field: "store_id",
		type: DataTypes.UUID,
		references: {
			model: TableNames.StoreTable,
			key: "id",
		},
		onUpdate: "CASCADE",
		onDelete: "SET NULL",
	},
	categoryId: {
		allowNull: false,
		field: "category_id",
		type: DataTypes.UUID,
		references: {
			model: TableNames.CategoryTable,
			key: "id",
		},
		onUpdate: "CASCADE",
		onDelete: "SET NULL",
	},
};

class Product extends Model {
	static config(sequelize: Sequelize) {
		return { sequelize, ...options };
	}

	static associate() {
		this.belongsTo(Store, { as: "store" });
		this.belongsTo(Category, { as: "category" });
		this.belongsToMany(Cart, {
			as: "carts",
			through: CartItem,
			foreignKey: "productId",
			otherKey: "cartId",
		});
		this.belongsToMany(Order, {
			as: "orders",
			through: OrderItem,
			foreignKey: "productId",
			otherKey: "orderId",
		});
		this.belongsToMany(Shoplist, {
			as: "shoplists",
			through: ShoplistItem,
			foreignKey: "productId",
			otherKey: "shoplistId",
		});
	}
}

export { Product, ProductSchema };
