import { Model, DataTypes, Sequelize } from "sequelize";
import modelOptions from "../../../utils/modelOptions";
import { User } from "./user.model";
import { Cart } from "./cart.model";
import { Store } from "./store.model";
import { PaymentMethod } from "./payment-method.model";
import { Product } from "./product.model";
import { OrderItem } from "./order-items.model";
import { TableNames } from "../../../types/definitions";

const options = modelOptions(TableNames.OrderTable);

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
	userId: {
		allowNull: false,
		field: "user_id",
		type: DataTypes.UUID,
		references: {
			model: TableNames.UserTable,
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
			model: TableNames.StoreTable,
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
			model: TableNames.CartTable,
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
			model: TableNames.PaymentMethodTable,
			key: "id",
		},
		onUpdate: "CASCADE",
		onDelete: "SET NULL",
	},
};

class Order extends Model {
	static config(sequelize: Sequelize) {
		return { sequelize, ...options };
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

export { Order, OrderSchema };
