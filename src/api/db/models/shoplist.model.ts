import { Model, DataTypes, Sequelize } from "sequelize";
import modelOptions from "../../../utils/modelOptions";
import { User } from "./user.model";
import { Product } from "./product.model";
import { ShoplistItem } from "./shoplist-items.model";
import { TableNames } from "../../../types/definitions";

const options = modelOptions(TableNames.ShoplistTable);

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
	userId: {
		allowNull: false,
		field: "user_id",
		type: DataTypes.UUID,
		references: {
			model: TableNames.UserTable,
			key: "id",
		},
		onUpdate: "CASCADE",
		onDelete: "SET NULL",
	},
};

class Shoplist extends Model {
	static config(sequelize: Sequelize) {
		return { sequelize, ...options };
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

export { Shoplist, ShoplistSchema };
