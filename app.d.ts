interface Cart {
	id: string;
	quantity: number;
	active: boolean;
	lastConnection: Date;
	latitude: number;
	longitude: number;
	total: number;
	digitalSignature: string;
	createdAt: Date;
	storeId: string;
	userId: string;
}
interface UpdateCart {
	quantity?: number;
	active?: boolean;
	lastConnection?: Date;
	latitude?: number;
	longitude?: number;
	total?: number;
	digitalSignature?: string;
	userId?: string;
}
interface Category {
	id: string;
	slug: string;
	name: string;
	createdAt: Date;
}
interface UpdateCategory {
	slug?: string;
	name?: string;
}
interface OpeningHours {
	id: string;
	day: string;
	openingHour: number;
	closingHour: number;
	createdAt: Date;
	storeId: string;
}
interface UpdateOpeningHours {
	day?: string;
	openingHour?: number;
	closingHour?: number;
}
interface Order {
	id: string;
	total: number;
	certified: boolean;
	certificate: string;
	status: string;
	createdAt: Date;
	userId: string;
	storeId: string;
	cartId: string;
	paymentMethodId: string;
}
interface UpdateOrder {
	certified?: boolean;
	certificate?: string;
	status?: string;
}
interface PaymentMethod {
	id: string;
	alias: string;
	cardholderName: string;
	number: string;
	network: string;
	expiryMonth: number;
	expiryYear: number;
	cvv: string;
	createdAt: Date;
	userId: string;
}
interface UpdatePaymentMethod {
	alias?: string;
}
interface Product {
	id: string;
	name: string;
	description: string;
	price: number;
	image: string;
	weight: number;
	measurementUnit: string;
	quantity: number;
	createdAt: Data;
	storeId: string;
	categoryId: string;
}
interface UpdateProduct {
	name?: string;
	description?: string;
	price?: number;
	image?: string;
	weight?: number;
	measurementUnit?: string;
	quantity?: number;
}
interface Shoplist {
	id: string;
	total: number;
	createdAt: Date;
	userId: string;
}
interface UpdateShoplist {
	total?: number;
}
interface Store {
	id: string;
	slug: string;
	name: string;
	description: string;
	logo: string;
	phone: string;
	address: string;
	latitude: number;
	longitude: number;
	createdAt: Date;
}
interface UpdateStore {
	slug?: string;
	name?: string;
	description?: string;
	logo?: string;
	phone?: string;
	address?: string;
	latitude?: number;
	longitude?: number;
}
interface User {
	id: string;
	username: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	role: string;
	avatar: string;
	recoveryToken: string;
	createdAt: Date;
}
interface UpdateUser {
	username?: string;
	firstName?: string;
	lastName?: string;
	email?: string;
	password?: string;
	role?: string;
	avatar?: string;
	recoveryToken?: string;
}

type MailPayload = {
	from: string;
	to: string;
	subject: string;
	html: string;
};
