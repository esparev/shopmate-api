import { Model, DataTypes, Sequelize } from "sequelize";
import modelOptions from "../../../utils/modelOptions";
import { Store } from "./store.model";
import { User } from "./user.model";
import { Order } from "./order.model";
import { Product } from "./product.model";
import { CartItem } from "./cart-items.model";
import { TableNames } from "../tables";

const options = modelOptions(false, "Cart", TableNames.CART_TABLE);

const CartSchema = (
	storeId: TableNames.STORE_TABLE,
	userId: TableNames.USER_TABLE
) => {
	return {
		id: {
			allowNull: false,
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		quantity: {
			allowNull: false,
			type: DataTypes.INTEGER,
			defaultValue: 0,
		},
		active: {
			allowNull: false,
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
		lastConnection: {
			allowNull: false,
			field: "last_connection",
			type: DataTypes.DATE,
			defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
		},
		latitude: {
			allowNull: false,
			type: DataTypes.FLOAT,
			validate: {
				min: -90,
				max: 90,
			},
		},
		longitude: {
			allowNull: false,
			type: DataTypes.FLOAT,
			validate: {
				min: -180,
				max: 180,
			},
		},
		total: {
			allowNull: false,
			field: "product_total",
			type: DataTypes.FLOAT,
			defaultValue: 0,
			validate: {
				min: 0,
			},
		},
		digitalSignature: {
			allowNull: false,
			field: "digital_signature",
			type: DataTypes.STRING,
		},
		createdAt: {
			allowNull: false,
			field: "created_at",
			type: DataTypes.DATE,
			defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
		},
		storeId: {
			allowNull: false,
			field: "store_id",
			type: DataTypes.UUID,
			references: {
				model: storeId,
				key: "id",
			},
			onUpdate: "CASCADE",
			onDelete: "SET NULL",
		},
		userId: {
			allowNull: false,
			field: "user_id",
			type: DataTypes.UUID,
			references: {
				model: userId,
				key: "id",
			},
			onUpdate: "CASCADE",
			onDelete: "SET NULL",
		},
	};
};

class Cart extends Model {
	static config(sequelize: Sequelize) {
		return { sequelize, options };
	}

	static associate() {
		this.hasMany(Order, { as: "orders", foreignKey: "cartId" });
		this.belongsTo(Store, { as: "store" });
		this.belongsTo(User, { as: "user" });
		this.belongsToMany(Product, {
			as: "products",
			through: CartItem,
			foreignKey: "cartId",
			otherKey: "productId",
		});
	}
}

export { Cart, CartSchema };
