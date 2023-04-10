const { Model, DataTypes, Sequelize } = require('sequelize');
const modelOptions = require('../../../utils/modelOptions');

const CATEGORY_TABLE = 'category';
const options = modelOptions(false, 'Category', CATEGORY_TABLE);

const CategorySchema = {
	id: {
		allowNull: false,
		type: DataTypes.UUID,
		defaultValue: Sequelize.UUIDV4,
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
		field: 'created_at',
		type: DataTypes.DATE,
		defaultValue: Sequelize.NOW,
	},
};

class Category extends Model {
	static config(sequelize) {
		return { sequelize, options };
	}

	static associate(models) {
		this.hasMany(models.Product, { as: 'products', foreignKey: 'categoryId' });
	}
}

module.exports = { Category, CategorySchema, CATEGORY_TABLE };
