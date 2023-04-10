const { Model, DataTypes, Sequelize } = require('sequelize');
const modelOptions = require('../../../utils/modelOptions');

const SHOPLIST_TABLE = 'shoplist';
const { USER_TABLE } = require('./user.model');
const options = modelOptions(false, 'Shoplist', SHOPLIST_TABLE);

const ShoplistSchema = {
	id: {
		allowNull: false,
		type: DataTypes.UUID,
		defaultValue: Sequelize.UUIDV4,
		primaryKey: true,
	},
	total: {
		allowNull: false,
		type: DataTypes.FLOAT,
	},
	createdAt: {
		allowNull: false,
		field: 'created_at',
		type: DataTypes.DATE,
		defaultValue: Sequelize.NOW,
	},
	userId: {
		allowNull: false,
		field: 'user_id',
		type: DataTypes.UUID,
		references: {
			model: USER_TABLE,
			key: 'id',
		},
		onUpdate: 'CASCADE',
		onDelete: 'SET NULL',
	},
};

class Shoplist extends Model {
	static config(sequelize) {
		return { sequelize, options };
	}

	static associate(models) {
		this.belongsTo(models.User, { as: 'user' });
		this.belongsToMany(models.Product, {
			as: 'products',
			through: models.ShopistItem,
			foreignKey: 'shoplistId',
			otherKey: 'productId',
		});
	}
}

module.exports = { Shoplist, ShoplistSchema, SHOPLIST_TABLE };
