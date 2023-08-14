import { BaseModelProps } from "../../app";
import { Roles } from "./definitions";

export interface ICart extends BaseModelProps {
	quantity: number;
	active: boolean;
	lastConnection: Date;
	latitude: number;
	longitude: number;
	total: number;
	digitalSignature: string;
	store: IStore;
	user: IUser;
}
export interface ICategory extends BaseModelProps {
	slug: string;
	name: string;
}
export interface IOpeningHours extends BaseModelProps {
	day: string;
	openingHour: number;
	closingHour: number;
	store: IStore;
}
export interface IOrder extends BaseModelProps {
	total: number;
	certified: boolean;
	certificate: string;
	status: string;
	user: IUser;
	store: IStore;
	cart: ICart;
	paymentMethod: IPaymentMethod;
}
export interface IPaymentMethod extends BaseModelProps {
	alias: string;
	cardholderName: string;
	number: string;
	network: string;
	expiryMonth: number;
	expiryYear: number;
	cvv: string;
	user: IUser;
}
export interface IProduct extends BaseModelProps {
	name: string;
	description: string;
	price: number;
	image: string;
	weight: number;
	measurementUnit: string;
	quantity: number;
	store: IStore;
	category: ICategory;
}
export interface IShoplist extends BaseModelProps {
	total: number;
	user: IUser;
}
export interface IStore extends BaseModelProps {
	slug: string;
	name: string;
	description: string;
	logo: string;
	phone: string;
	address: string;
	latitude: number;
	longitude: number;
}
export interface IUser extends BaseModelProps {
	username: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	role: Roles;
	avatar: string;
	recoveryToken: string;
}
