const { Model, DataTypes, Sequelize } = require('sequelize');
const modelOptions = require('../../../utils/modelOptions');

const PRODUCT_TABLE = 'product';
const { STORE_TABLE } = require('./store.model');
const { CATEGORY_TABLE } = require('./category.model');
const options = modelOptions(false, 'Product', PRODUCT_TABLE);

const ProductSchema = {
	id: {
		allowNull: false,
		type: DataTypes.UUID,
		defaultValue: Sequelize.UUIDV4,
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
		field: 'measurement_unit',
		type: DataTypes.STRING,
	},
	quantity: {
		allowNull: false,
		type: DataTypes.INTEGER,
	},
	createdAt: {
		allowNull: false,
		field: 'created_at',
		type: DataTypes.DATE,
		defaultValue: Sequelize.NOW,
	},
	storeId: {
		allowNull: false,
		field: 'store_id',
		type: DataTypes.UUID,
		references: {
			model: STORE_TABLE,
			key: 'id',
		},
		onUpdate: 'CASCADE',
		onDelete: 'SET NULL',
	},
	categoryId: {
		allowNull: false,
		field: 'category_id',
		type: DataTypes.UUID,
		references: {
			model: CATEGORY_TABLE,
			key: 'id',
		},
		onUpdate: 'CASCADE',
		onDelete: 'SET NULL',
	},
};

class Product extends Model {
	static config(sequelize) {
		return { sequelize, options };
	}

	static associate(models) {
		this.belongsTo(models.Store, { as: 'store' });
		this.belongsTo(models.Category, { as: 'category' });
		this.belongsToMany(models.Cart, {
			as: 'carts',
			through: models.CartItem,
			foreignKey: 'productId',
			otherKey: 'cartId',
		});
		this.belongsToMany(models.Order, {
			as: 'orders',
			through: models.OrderItem,
			foreignKey: 'productId',
			otherKey: 'orderId',
		});
		this.belongsToMany(models.Shoplist, {
			as: 'shoplists',
			through: models.ShoplistItem,
			foreignKey: 'productId',
			otherKey: 'shoplistId',
		});
	}
}

module.exports = { Product, ProductSchema, PRODUCT_TABLE };
