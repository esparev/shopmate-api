const { Model, DataTypes, Sequelize } = require('sequelize');
const modelOptions = require('../../../utils/modelOptions');

const USER_TABLE = 'user';
const options = modelOptions(false, 'User', USER_TABLE);

const UserSchema = {
	id: {
		allowNull: false,
		type: DataTypes.UUID,
		defaultValue: Sequelize.UUIDV4,
		primaryKey: true,
	},
	username: {
		allowNull: false,
		type: DataTypes.STRING,
		unique: true,
	},
	firstName: {
		allowNull: false,
		field: 'first_name',
		type: DataTypes.STRING,
	},
	lastName: {
		allowNull: false,
		field: 'last_name',
		type: DataTypes.STRING,
	},
	email: {
		allowNull: false,
		type: DataTypes.STRING,
		unique: true,
		validate: {
			isEmail: true,
		},
	},
	password: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	role: {
		allowNull: false,
		type: DataTypes.STRING,
		defaultValue: 'user',
	},
	avatar: {
		allowNull: true,
		type: DataTypes.STRING,
	},
	recoveryToken: {
		allowNull: true,
		field: 'recovery_token',
		type: DataTypes.STRING,
	},
	createdAt: {
		allowNull: false,
		field: 'created_at',
		type: DataTypes.DATE,
		defaultValue: Sequelize.NOW,
	},
};

class User extends Model {
	static config(sequelize) {
		return { sequelize, options };
	}

	static associate(models) {
		this.hasMany(models.PaymentMethod, { as: 'paymentMethods', foreignKey: 'userId' });
		this.hasMany(models.Order, { as: 'orders', foreignKey: 'userId' });
		this.hasOne(models.Shoplist, { as: 'shoplists', foreignKey: 'userId' });
		this.hasOne(models.Cart, { as: 'cart', foreignKey: 'userId' });
	}
}

module.exports = { User, UserSchema, USER_TABLE };
