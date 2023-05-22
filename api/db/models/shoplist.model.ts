import { Model, DataTypes, Sequelize } from "sequelize";
import modelOptions from "../../../utils/modelOptions";
import { User, USER_TABLE } from "./user.model";
import { Product } from "./product.model";
import { ShoplistItem } from "./shoplist-items.model";

const SHOPLIST_TABLE = "shoplist";
const options = modelOptions(false, "Shoplist", SHOPLIST_TABLE);

const ShoplistSchema = {
	id: {
		allowNull: false,
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true,
	},
	total: {
		allowNull: false,
		type: DataTypes.FLOAT,
	},
	createdAt: {
		allowNull: false,
		field: "created_at",
		type: DataTypes.DATE,
		defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
	},
	userId: {
		allowNull: false,
		field: "user_id",
		type: DataTypes.UUID,
		references: {
			model: USER_TABLE,
			key: "id",
		},
		onUpdate: "CASCADE",
		onDelete: "SET NULL",
	},
};

class Shoplist extends Model {
	static config(sequelize: Sequelize) {
		return { sequelize, options };
	}

	static associate() {
		this.belongsTo(User, { as: "user" });
		this.belongsToMany(Product, {
			as: "products",
			through: ShoplistItem,
			foreignKey: "shoplistId",
			otherKey: "productId",
		});
	}
}

export { Shoplist, ShoplistSchema, SHOPLIST_TABLE };
