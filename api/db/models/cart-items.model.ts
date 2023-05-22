import { Model, DataTypes, Sequelize } from "sequelize";
import modelOptions from "../../../utils/modelOptions";
import { CART_TABLE } from "./cart.model";
import { PRODUCT_TABLE } from "./product.model";

const CART_ITEM_TABLE = 'cart_has_item';
const options = modelOptions(false, 'CartItem', CART_ITEM_TABLE);

const CartItemSchema = {
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
		field: 'cart_id',
		type: DataTypes.UUID,
		references: {
			model: CART_TABLE,
			key: 'id',
		},
		onUpdate: 'CASCADE',
		onDelete: 'SET NULL',
	},
	productId: {
		allowNull: false,
		field: 'product_id',
		type: DataTypes.UUID,
		references: {
			model: PRODUCT_TABLE,
			key: 'id',
		},
		onUpdate: 'CASCADE',
		onDelete: 'SET NULL',
	},
};

class CartItem extends Model {
	static config(sequelize: Sequelize) {
		return { sequelize, options };
	}
}

export { CartItem, CartItemSchema, CART_ITEM_TABLE };
