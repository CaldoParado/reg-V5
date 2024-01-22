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
	favorite: boolean;
	icon: string;
	value: number;
	description: string;
	associations: {
		[key: string]: number
	};

	quantity: number;
	complements: Product[]
};

export function compareProduct(p1: Product | Complement, p2: Product | Complement): boolean {
	if (p1.id === p2.id) return p1.name === p2.name;
	return false;
}

export type ProductBill = Pick<Product, 'id' | 'name' | 'icon' | 'value' | 'quantity'>;
export type Complement = Pick<Product, 'id' | 'name' | 'value'>;
