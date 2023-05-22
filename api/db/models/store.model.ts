import { Model, DataTypes, Sequelize } from "sequelize";
import modelOptions from "../../../utils/modelOptions";
import { OpeningHours } from "./opening-hours.model";
import { Product } from "./product.model";
import { Order } from "./order.model";
import { Cart } from "./cart.model";

const STORE_TABLE = "store";
const options = modelOptions(false, "Store", STORE_TABLE);

const StoreSchema = {
	id: {
		allowNull: false,
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true,
	},
	slug: {
		allowNull: false,
		type: DataTypes.STRING,
		unique: true,
	},
	name: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	description: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	logo: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	phone: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	address: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	latitude: {
		allowNull: false,
		type: DataTypes.FLOAT,
		validate: {
			min: -90,
			max: 90,
		},
	},
	longitude: {
		allowNull: false,
		type: DataTypes.FLOAT,
		validate: {
			min: -180,
			max: 180,
		},
	},
	createdAt: {
		allowNull: false,
		field: "created_at",
		type: DataTypes.DATE,
		defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
	},
};

class Store extends Model {
	static config(sequelize: Sequelize) {
		return { sequelize, options };
	}

	static associate() {
		this.hasMany(OpeningHours, { as: "openingHours", foreignKey: "storeId" });
		this.hasMany(Product, { as: "products", foreignKey: "storeId" });
		this.hasMany(Order, { as: "orders", foreignKey: "storeId" });
		this.hasMany(Cart, { as: "carts", foreignKey: "storeId" });
	}
}

export { Store, StoreSchema, STORE_TABLE };
