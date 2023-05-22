import { Model, DataTypes, Sequelize } from "sequelize";
import modelOptions from "../../../utils/modelOptions";
import { ORDER_TABLE } from "./order.model";
import { PRODUCT_TABLE } from "./product.model";

const ORDER_ITEM_TABLE = "order_has_item";
const options = modelOptions(false, "OrderItem", ORDER_ITEM_TABLE);

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
			model: ORDER_TABLE,
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
			model: PRODUCT_TABLE,
			key: "id",
		},
		onUpdate: "CASCADE",
		onDelete: "SET NULL",
	},
};

class OrderItem extends Model {
	static config(sequelize: Sequelize) {
		return { sequelize, options };
	}
}

export { OrderItem, OrderItemSchema, ORDER_ITEM_TABLE };
