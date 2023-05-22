import { Model, DataTypes, Sequelize } from "sequelize";
import modelOptions from "../../../utils/modelOptions";
import { Store, STORE_TABLE } from "./store.model";

const OPENING_HOURS_TABLE = "opening_hours";
const options = modelOptions(false, "OpeningHours", OPENING_HOURS_TABLE);

const OpeningHoursSchema = {
	id: {
		allowNull: false,
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true,
	},
	day: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	openingHour: {
		allowNull: false,
		field: "opening_hour",
		type: DataTypes.INTEGER,
	},
	closingHour: {
		allowNull: false,
		field: "closing_hour",
		type: DataTypes.INTEGER,
	},
	createdAt: {
		allowNull: false,
		field: "created_at",
		type: DataTypes.DATE,
		defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
	},
	storeId: {
		allowNull: false,
		field: "store_id",
		type: DataTypes.UUID,
		references: {
			model: STORE_TABLE,
			key: "id",
		},
		onUpdate: "CASCADE",
		onDelete: "SET NULL",
	},
};

class OpeningHours extends Model {
	static config(sequelize: Sequelize) {
		return { sequelize, options };
	}

	static associate() {
		this.belongsTo(Store, { as: "store" });
	}
}

export { OpeningHours, OpeningHoursSchema, OPENING_HOURS_TABLE };
