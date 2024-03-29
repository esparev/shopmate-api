import { Model, DataTypes, Sequelize } from "sequelize";
import modelOptions from "../../../utils/modelOptions";
import { PaymentMethod } from "./payment-method.model";
import { Order } from "./order.model";
import { Shoplist } from "./shoplist.model";
import { Cart } from "./cart.model";
import { TableNames, Roles } from "../../../types/definitions";

const options = modelOptions(TableNames.UserTable);

const UserSchema = {
	id: {
		allowNull: false,
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true,
	},
	username: {
		allowNull: false,
		type: DataTypes.STRING,
		unique: true,
	},
	firstName: {
		allowNull: false,
		field: "first_name",
		type: DataTypes.STRING,
	},
	lastName: {
		allowNull: false,
		field: "last_name",
		type: DataTypes.STRING,
	},
	email: {
		allowNull: false,
		type: DataTypes.STRING,
		unique: true,
		validate: {
			isEmail: true,
		},
	},
	password: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	role: {
		allowNull: false,
		type: DataTypes.STRING,
		defaultValue: Roles.User,
	},
	avatar: {
		allowNull: true,
		type: DataTypes.STRING,
	},
	recoveryToken: {
		allowNull: true,
		field: "recovery_token",
		type: DataTypes.STRING,
	},
};

class User extends Model {
	static config(sequelize: Sequelize) {
		return { sequelize, ...options };
	}

	static associate() {
		this.hasMany(PaymentMethod, {
			as: "paymentMethods",
			foreignKey: "userId",
		});
		this.hasMany(Order, { as: "orders", foreignKey: "userId" });
		this.hasOne(Shoplist, { as: "shoplists", foreignKey: "userId" });
		this.hasOne(Cart, { as: "cart", foreignKey: "userId" });
	}
}

export { User, UserSchema };
