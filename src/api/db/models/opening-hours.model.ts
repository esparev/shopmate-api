import { Model, DataTypes, Sequelize } from "sequelize";
import modelOptions from "../../../utils/modelOptions";
import { Store } from "./store.model";
import { TableNames } from "../../../types/definitions";

const options = modelOptions(TableNames.OpeningHoursTable);

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
	storeId: {
		allowNull: false,
		field: "store_id",
		type: DataTypes.UUID,
		references: {
			model: TableNames.StoreTable,
			key: "id",
		},
		onUpdate: "CASCADE",
		onDelete: "SET NULL",
	},
};

class OpeningHours extends Model {
	static config(sequelize: Sequelize) {
		return { sequelize, ...options };
	}

	static associate() {
		this.belongsTo(Store, { as: "store" });
	}
}

export { OpeningHours, OpeningHoursSchema };
