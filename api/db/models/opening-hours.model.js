const { Model, DataTypes, Sequelize } = require('sequelize');
const modelOptions = require('../../../utils/modelOptions');

const OPENING_HOURS_TABLE = 'opening_hours';
const { STORE_TABLE } = require('./store.model');
const options = modelOptions(false, 'OpeningHours', OPENING_HOURS_TABLE);

const OpeningHoursSchema = {
	id: {
		allowNull: false,
		type: DataTypes.UUID,
		defaultValue: Sequelize.UUIDV4,
		primaryKey: true,
	},
	day: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	openingHour: {
		allowNull: false,
		field: 'opening_hour',
		type: DataTypes.INTEGER,
	},
	closingHour: {
		allowNull: false,
		field: 'closing_hour',
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
};

class OpeningHours extends Model {
	static config(sequelize) {
		return { sequelize, options };
	}

	static associate(models) {
		this.belongsTo(models.Store, { as: 'store' });
	}
}

module.exports = { OpeningHours, OpeningHoursSchema, OPENING_HOURS_TABLE };
