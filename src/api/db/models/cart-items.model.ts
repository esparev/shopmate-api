import { Model, DataTypes, Sequelize } from "sequelize";
import modelOptions from "../../../utils/modelOptions";
import { TableNames } from "../tables";

const options = modelOptions(false, "CartItem", TableNames.CART_ITEM_TABLE);

const CartItemSchema = (
	cartTable: TableNames.CART_TABLE,
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
		cartId: {
			allowNull: false,
			field: "cart_id",
			type: DataTypes.UUID,
			references: {
				model: cartTable,
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

class CartItem extends Model {
	static config(sequelize: Sequelize) {
		return { sequelize, options };
	}
}

export { CartItem, CartItemSchema };
