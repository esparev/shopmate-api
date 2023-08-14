import { Model, DataTypes, Sequelize } from "sequelize";
import modelOptions from "../../../utils/modelOptions";
import { Product } from "./product.model";
import { TableNames } from "../../../types/definitions";

const options = modelOptions(TableNames.CategoryTable);

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
};

class Category extends Model {
	static config(sequelize: Sequelize) {
		return { sequelize, ...options };
	}

	static associate() {
		this.hasMany(Product, { as: "products", foreignKey: "categoryId" });
	}
}

export { Category, CategorySchema };
