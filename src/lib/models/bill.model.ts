import { product_complements } from "$lib/services/Bill.service";
import { get } from "svelte/store";

export type Bill = {
	id: number;
	name: string;
	amount: number;
	due: Date;
	paid: boolean;
	products: ProductBill[];
};

export enum Category {
	default = '',
	complemento = 'Complemento',
	bandeja = 'Bandeja',
	sopa = 'Sopa',
	adicional = 'Adicional',
	arepa = 'Arepa',	
	bebida = 'Bebida',
}
export class Product {
	id: string;
	name: string;
	value: number;
	category: Category = Category.default;
	shortName: string = '';
	favorite: boolean = false;
	icon: string = '';
	description: string = '';
	quantity: number = 1;
	complements: Complement[] = [];

	constructor(product: Partial<Product>) {
		this.id = product.id!;
		this.name = product.name!;
		this.value = product.value!;
		if (product)
			Object.assign(this, product);
	}

	copy(): Product {
		return new Product({ ...this });
	}

	setComplement(complement: Complement) {
		const pcs = get(product_complements)
		const indx = this.complements.findIndex(c => c.id === complement.id);

		if (indx !== -1) {
			// If the complement exists, remove it
			this.complements.splice(indx, 1);
		} else {
			// Find the value of the new complement from pcs, if it exists
			const newValComp = pcs.find(pc => pc.prod === this.id && pc.comp === complement.id);
			// Add the new complement with the updated value or the original value if not found
			this.complements.push({ ...complement, value: newValComp?.value ?? complement.value });
		}
		return this;
	}

	compareProduct(other: Product): boolean {
		return this.name === other.name &&
			// this.id === other.id &&
			this.compareComplements(this.complements, other.complements);
	}

	private compareComplements(cmps: Complement[], cmps2: Complement[]) {
		[cmps, cmps2] = [cmps ?? [], cmps2 ?? []]
		if (cmps?.length !== cmps2?.length) return false;
		const scmps = cmps2.toSorted((a, b) => a.id.localeCompare(b.id));
		const scmps2 = cmps.toSorted((a, b) => a.id.localeCompare(b.id));
		for (let i = 0; i < scmps.length; ++i)
			if (scmps[i].id !== scmps2[i].id) return false;
		return true;
	}

	fullPrice(): number {
		const complementsPrice = this.complements.reduce((acc, curr) => acc + curr.value, 0);
		return (this.value + complementsPrice) * this.quantity;
	}

	incrementQuantity() {
		this.setQuantity(this.quantity + 1);
	}

	setQuantity(quantity: number) {
		this.quantity = quantity;
	}
}
export type ProductBill = Pick<Product, 'id' | 'name' | 'value' | 'quantity' | 'complements'>;
export type Complement = Pick<Product, 'id' | 'name' | 'value' | 'fullPrice'>;
export type ProductComplement = { prod: string, comp: string, value: number };
