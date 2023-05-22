import { Model, ModelStatic, DataTypes, Sequelize } from "sequelize";
import modelOptions from "../../../utils/modelOptions";
import { User, USER_TABLE } from "./user.model";
import { Cart, CART_TABLE } from "./cart.model";
import { Store, STORE_TABLE } from "./store.model";
import { PaymentMethod, PAYMENT_METHOD_TABLE } from "./payment-method.model";
import { Product } from "./product.model";
import { OrderItem } from "./order-items.model";

const ORDER_TABLE = "order";
const options = modelOptions(false, "Order", ORDER_TABLE);

const OrderSchema = {
	id: {
		allowNull: false,
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true,
	},
	total: {
		allowNull: false,
		type: DataTypes.FLOAT,
	},
	certified: {
		allowNull: false,
		type: DataTypes.BOOLEAN,
	},
	certificate: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	status: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	createdAt: {
		allowNull: false,
		field: "created_at",
		type: DataTypes.DATE,
		defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
	},
	userId: {
		allowNull: false,
		field: "user_id",
		type: DataTypes.UUID,
		references: {
			model: USER_TABLE,
			key: "id",
		},
		onUpdate: "CASCADE",
		onDelete: "SET NULL",
	},
	storeId: {
		allowNull: false,
		field: "store_id",
		type: DataTypes.UUID,
		references: {
			model: STORE_TABLE,
			key: "id",
		},
		onUpdate: "CASCADE",
		onDelete: "SET NULL",
	},
	cartId: {
		allowNull: false,
		field: "cart_id",
		type: DataTypes.UUID,
		references: {
			model: CART_TABLE,
			key: "id",
		},
		onUpdate: "CASCADE",
		onDelete: "SET NULL",
	},
	paymentMethodId: {
		allowNull: false,
		field: "payment_method_id",
		type: DataTypes.UUID,
		references: {
			model: PAYMENT_METHOD_TABLE,
			key: "id",
		},
		onUpdate: "CASCADE",
		onDelete: "SET NULL",
	},
};

class Order extends Model {
	static config(sequelize: Sequelize) {
		return { sequelize, options };
	}

	static associate() {
		this.belongsTo(User, { as: "user" });
		this.belongsTo(Store, { as: "store" });
		this.belongsTo(Cart, { as: "cart" });
		this.belongsTo(PaymentMethod, { as: "paymentMethod" });
		this.belongsToMany(Product, {
			as: "products",
			through: OrderItem,
			foreignKey: "orderId",
			otherKey: "productId",
		});
	}
}

export { Order, OrderSchema, ORDER_TABLE };
