const { Model, DataTypes, Sequelize } = require('sequelize');
const modelOptions = require('../../../utils/modelOptions');

const STORE_TABLE = 'store';
const options = modelOptions(false, 'Store', STORE_TABLE);

const StoreSchema = {
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
	description: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	logo: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	phone: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	address: {
		allowNull: false,
		type: DataTypes.STRING,
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
	createdAt: {
		allowNull: false,
		field: 'created_at',
		type: DataTypes.DATE,
		defaultValue: Sequelize.NOW,
	},
};

class Store extends Model {
	static config(sequelize) {
		return { sequelize, options };
	}

	static associate(models) {
		this.hasMany(models.OpeningHours, { as: 'openingHours', foreignKey: 'storeId' });
		this.hasMany(models.Product, { as: 'products', foreignKey: 'storeId' });
		this.hasMany(models.Order, { as: 'orders', foreignKey: 'storeId' });
		this.hasMany(models.Cart, { as: 'carts', foreignKey: 'storeId' });
	}
}

module.exports = { Store, StoreSchema, STORE_TABLE };
