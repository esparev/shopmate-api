import { Model, DataTypes, Sequelize } from "sequelize";
import modelOptions from "../../../utils/modelOptions";
import { User } from "./user.model";
import { Order } from "./order.model";
import { TableNames } from "../../../types/definitions";

const options = modelOptions(TableNames.PaymentMethodTable);

const PaymentMethodSchema = {
	id: {
		allowNull: false,
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true,
	},
	alias: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	cardholderName: {
		allowNull: false,
		field: "cardholder_name",
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
		field: "expiry_month",
		type: DataTypes.INTEGER,
	},
	expiryYear: {
		allowNull: false,
		field: "expiry_year",
		type: DataTypes.INTEGER,
	},
	cvv: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	userId: {
		allowNull: false,
		field: "user_id",
		type: DataTypes.UUID,
		references: {
			model: TableNames.UserTable,
			key: "id",
		},
		onUpdate: "CASCADE",
		onDelete: "SET NULL",
	},
};

class PaymentMethod extends Model {
	static config(sequelize: Sequelize) {
		return { sequelize, ...options };
	}

	static associate() {
		this.hasMany(Order, { as: "orders", foreignKey: "paymentMethodId" });
		this.belongsTo(User, { as: "user" });
	}
}

export { PaymentMethod, PaymentMethodSchema };
