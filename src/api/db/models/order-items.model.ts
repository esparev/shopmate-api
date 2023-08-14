import { Model, DataTypes, Sequelize } from "sequelize";
import modelOptions from "../../../utils/modelOptions";
import { TableNames } from "../../../types/definitions";

const options = modelOptions(TableNames.OrderItemTable);

const OrderItemSchema = {
	id: {
		allowNull: false,
		type: DataTypes.UUID,
		primaryKey: true,
	},
	quantity: {
		allowNull: false,
		type: DataTypes.INTEGER,
		defaultValue: 1,
	},
	orderId: {
		allowNull: false,
		field: "order_id",
		type: DataTypes.UUID,
		references: {
			model: TableNames.OrderTable,
			key: "id",
		},
		onUpdate: "CASCADE",
		onDelete: "SET NULL",
	},
	productId: {
		allowNull: false,
		field: "product_id",
		type: DataTypes.UUID,
		references: {
			model: TableNames.ProductTable,
			key: "id",
		},
		onUpdate: "CASCADE",
		onDelete: "SET NULL",
	},
};

class OrderItem extends Model {
	static config(sequelize: Sequelize) {
		return { sequelize, ...options };
	}
}

export { OrderItem, OrderItemSchema };
