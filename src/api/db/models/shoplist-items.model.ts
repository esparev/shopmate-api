import { Model, DataTypes, Sequelize } from "sequelize";
import modelOptions from "../../../utils/modelOptions";
import { TableNames } from "../tables";

const options = modelOptions(
	false,
	"ShoplistItem",
	TableNames.SHOPLIST_ITEM_TABLE
);

const ShoplistItemSchema = (
	shoplistTable: TableNames.SHOPLIST_TABLE,
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
		shoplistId: {
			allowNull: false,
			field: "shoplist_id",
			type: DataTypes.UUID,
			references: {
				model: shoplistTable,
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

class ShoplistItem extends Model {
	static config(sequelize: Sequelize) {
		return { sequelize, options };
	}
}

export { ShoplistItem, ShoplistItemSchema };
