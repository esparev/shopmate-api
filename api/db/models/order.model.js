const { Model, DataTypes, Sequelize } = require('sequelize');
const modelOptions = require('../../../utils/modelOptions');

const ORDER_TABLE = 'order';
const { USER_TABLE } = require('./user.model');
const { CART_TABLE } = require('./cart.model');
const { STORE_TABLE } = require('./store.model');
const { PAYMENT_METHOD_TABLE } = require('./payment-method.model');
const options = modelOptions(false, 'Order', ORDER_TABLE);

const OrderSchema = {
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
	certified: {
		allowNull: false,
		type: DataTypes.BOOLEAN,
	},
	certificate: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	status: {
		allowNull: false,
		type: DataTypes.STRING,
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
	cartId: {
		allowNull: false,
		field: 'cart_id',
		type: DataTypes.UUID,
		references: {
			model: CART_TABLE,
			key: 'id',
		},
		onUpdate: 'CASCADE',
		onDelete: 'SET NULL',
	},
	paymentMethodId: {
		allowNull: false,
		field: 'payment_method_id',
		type: DataTypes.UUID,
		references: {
			model: PAYMENT_METHOD_TABLE,
			key: 'id',
		},
		onUpdate: 'CASCADE',
		onDelete: 'SET NULL',
	},
};

class Order extends Model {
	static config(sequelize) {
		return { sequelize, options };
	}

	static associate(models) {
		this.belongsTo(models.User, { as: 'user' });
		this.belongsTo(models.Store, { as: 'store' });
		this.belongsTo(models.Cart, { as: 'cart' });
		this.belongsTo(models.PaymentMethod, { as: 'paymentMethod' });
		this.belongsToMany(models.Product, {
			as: 'products',
			through: models.OrderItem,
			foreignKey: 'orderId',
			otherKey: 'productId',
		});
	}
}

module.exports = { Order, OrderSchema, ORDER_TABLE };
