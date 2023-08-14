import {
	ICart,
	ICategory,
	IOpeningHours,
	IOrder,
	IPaymentMethod,
	IProduct,
	IShoplist,
	IStore,
	IUser,
} from "./models";

type BaseModelProps = "id" | "createdAt" | "updatedAt";

export interface CreateCartDTO
	extends Omit<ICart, BaseModelProps | "quantity" | "store" | "user"> {
	quantity?: number;
	storeId: IStore["id"];
	userId?: IUser["id"];
}
export interface UpdateCartDTO
	extends Partial<Omit<CreateCartDTO, "storeId">> {}

export interface CreateCategoryDTO extends Omit<ICategory, BaseModelProps> {}
export interface UpdateCategoryDTO extends Partial<CreateCategoryDTO> {}

export interface CreateOpeningHoursDTO
	extends Omit<IOpeningHours, BaseModelProps | "store"> {
	storeId: IStore["id"];
}
export interface UpdateOpeningHoursDTO
	extends Partial<Omit<CreateOpeningHoursDTO, "storeId">> {}

export interface CreateOrderDTO
	extends Omit<
		IOrder,
		BaseModelProps | "user" | "store" | "cart" | "paymentMethod"
	> {
	userId: IUser["id"];
	storeId: IStore["id"];
	cartId: ICart["id"];
	paymentMethodId: IPaymentMethod["id"];
}
export interface UpdateOrderDTO
	extends Partial<
		Omit<
			CreateOrderDTO,
			"total" | "userId" | "storeId" | "cartId" | "paymentMethodId"
		>
	> {}

export interface CreatePaymentMethodDTO
	extends Omit<IPaymentMethod, BaseModelProps | "user"> {
	userId: IUser["id"];
}
export interface UpdatePaymentMethodDTO
	extends Partial<
		Omit<
			CreatePaymentMethodDTO,
			| "cardholderName"
			| "number"
			| "network"
			| "expiryMonth"
			| "expiryYear"
			| "cvv"
			| "userId"
		>
	> {}

export interface CreateProductDTO
	extends Omit<IProduct, BaseModelProps | "store" | "category"> {
	storeId: IStore["id"];
	categoryId: ICategory["id"];
}
export interface UpdateProductDTO
	extends Partial<Omit<CreateProductDTO, "storeId">> {}

export interface CreateShoplistDTO
	extends Omit<IShoplist, BaseModelProps | "user"> {
	userId: IUser["id"];
}
export interface UpdateShoplistDTO
	extends Partial<Omit<CreateShoplistDTO, "userId">> {}

export interface CreateStoreDTO extends Omit<IStore, BaseModelProps> {}
export interface UpdateStoreDTO extends Partial<CreateStoreDTO> {}

export interface CreateUserDTO extends Omit<IUser, BaseModelProps> {}
export interface UpdateUserDTO extends Partial<CreateUserDTO> {}
