import { Model, DataTypes, Sequelize } from "sequelize";
import modelOptions from "../../../utils/modelOptions";
import { Product } from "./product.model";

const CATEGORY_TABLE = "category";
const options = modelOptions(false, "Category", CATEGORY_TABLE);

const CategorySchema = {
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
	createdAt: {
		allowNull: false,
		field: "created_at",
		type: DataTypes.DATE,
		defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
	},
};

class Category extends Model {
	static config(sequelize: Sequelize) {
		return { sequelize, options };
	}

	static associate() {
		this.hasMany(Product, { as: "products", foreignKey: "categoryId" });
	}
}

export { Category, CategorySchema, CATEGORY_TABLE };
