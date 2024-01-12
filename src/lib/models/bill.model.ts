export type Bill = {
	id: number;
	name: string;
	amount: number;
	due: Date;
	paid: boolean;
	products: ProductBill[];
};

export type Product = {
	id: string;
	name: string;
	shortName: string;
	icon: string;
	price: number;
	quantity: number;
	description: string;
};

export type ProductBill = Pick<
	Product,
	'id' | 'name' | 'icon' | 'price' | 'quantity'
>;
