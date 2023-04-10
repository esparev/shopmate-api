const { Model, DataTypes, Sequelize } = require('sequelize');
const modelOptions = require('../../../utils/modelOptions');

const CART_TABLE = 'cart';
const { STORE_TABLE } = require('./store.model');
const { USER_TABLE } = require('./user.model');
const options = modelOptions(false, 'Cart', CART_TABLE);

const CartSchema = {
	id: {
		allowNull: false,
		type: DataTypes.UUID,
		defaultValue: Sequelize.UUIDV4,
		primaryKey: true,
	},
	quantity: {
		allowNull: false,
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	active: {
		allowNull: false,
		type: DataTypes.BOOLEAN,
		defaultValue: false,
	},
	lastConnection: {
		allowNull: false,
		field: 'last_connection',
		type: DataTypes.DATE,
		defaultValue: Sequelize.NOW,
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
	productTotal: {
		allowNull: false,
		field: 'product_total',
		type: DataTypes.FLOAT,
		defaultValue: 0,
		validate: {
			min: 0,
		},
	},
	digitalSignature: {
		allowNull: false,
		field: 'digital_signature',
		type: DataTypes.STRING,
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

class Cart extends Model {
	static config(sequelize) {
		return { sequelize, options };
	}

	static associate(models) {
		this.hasMany(models.Order, { as: 'orders', foreignKey: 'cartId' });
		this.belongsTo(models.Store, { as: 'store' });
		this.belongsTo(models.User, { as: 'user' });
		this.belongsToMany(models.Product, {
			as: 'products',
			through: models.CartItem,
			foreignKey: 'cartId',
			otherKey: 'productId',
		});
	}
}

module.exports = { Cart, CartSchema, CART_TABLE };
