import { Model, DataTypes, Sequelize } from "sequelize";
import modelOptions from "../../../utils/modelOptions";
import { SHOPLIST_TABLE } from "./shoplist.model";
import { PRODUCT_TABLE } from "./product.model";

const SHOPLIST_ITEM_TABLE = "shoplist_has_item";
const options = modelOptions(false, "ShoplistItem", SHOPLIST_ITEM_TABLE);

const ShoplistItemSchema = {
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
	shoplistId: {
		allowNull: false,
		field: "shoplist_id",
		type: DataTypes.UUID,
		references: {
			model: SHOPLIST_TABLE,
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

class ShoplistItem extends Model {
	static config(sequelize: Sequelize) {
		return { sequelize, options };
	}
}

export { ShoplistItem, ShoplistItemSchema, SHOPLIST_ITEM_TABLE };
