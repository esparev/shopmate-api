const { Model, DataTypes, Sequelize } = require('sequelize');
const modelOptions = require('../../../utils/modelOptions');

const PAYMENT_METHOD_TABLE = 'payment_method';
const { USER_TABLE } = require('./user.model');
const options = modelOptions(false, 'PaymentMethod', PAYMENT_METHOD_TABLE);

const PaymentMethodSchema = {
	id: {
		allowNull: false,
		type: DataTypes.UUID,
		defaultValue: Sequelize.UUIDV4,
		primaryKey: true,
	},
	alias: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	cardholderName: {
		allowNull: false,
		field: 'cardholder_name',
		type: DataTypes.STRING,
	},
	number: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	network: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	expiryMonth: {
		allowNull: false,
		field: 'expiry_month',
		type: DataTypes.INTEGER,
	},
	expiryYear: {
		allowNull: false,
		field: 'expiry_year',
		type: DataTypes.INTEGER,
	},
	cvv: {
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
};

class PaymentMethod extends Model {
	static config(sequelize) {
		return { sequelize, options };
	}

	static associate(models) {
		this.hasMany(models.Order, { as: 'orders', foreignKey: 'paymentMethodId' });
		this.belongsTo(models.User, { as: 'user' });
	}
}

module.exports = { PaymentMethod, PaymentMethodSchema, PAYMENT_METHOD_TABLE };
