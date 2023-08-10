import { Model, DataTypes, Sequelize } from "sequelize";
import modelOptions from "../../../utils/modelOptions";
import { TableNames } from "../tables";

const options = modelOptions(false, "OrderItem", TableNames.ORDER_ITEM_TABLE);

const OrderItemSchema = (
	orderTable: TableNames.ORDER_TABLE,
	productTable: TableNames.PRODUCT_TABLE
) => {
	return {
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
				model: orderTable,
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
				model: productTable,
				key: "id",
			},
			onUpdate: "CASCADE",
			onDelete: "SET NULL",
		},
	};
};

class OrderItem extends Model {
	static config(sequelize: Sequelize) {
		return { sequelize, options };
	}
}

export { OrderItem, OrderItemSchema };
