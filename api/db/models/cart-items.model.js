const { Model, DataTypes } = require('sequelize');
const modelOptions = require('../../../utils/modelOptions');

const CART_ITEM_TABLE = 'cart_has_item';
const { CART_TABLE } = require('./cart.model');
const { PRODUCT_TABLE } = require('./product.model');
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
	static config(sequelize) {
		return { sequelize, options };
	}
}

module.exports = { CartItem, CartItemSchema, CART_ITEM_TABLE };
