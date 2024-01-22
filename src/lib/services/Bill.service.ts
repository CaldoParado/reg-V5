import { compareProduct, type Complement, type Product } from '$lib/models/bill.model';
import { writable, type Writable } from 'svelte/store';
import { DBService } from './DB.service';
// import { DBService } from './DB.service';

/**
 * Almacena una lista de productos para una factura.
 * @type {Writable<product[]>}
 */
export const _bill: Writable<Product[]> = writable([]);

export function payBill(){
	DBService.getInstance().createDoc({value: Math.round(Math.random()*1000)}, 'bill')
}

export function addComplements(comp: Complement): void {
	return addProduct({
		shortName: '',
		favorite: false,
		icon: '',
		description: '',
		associations: {},
		quantity: 1,
		complements: [],
		...comp,
	});
	// _bill.update((products: Product[]) => {
	// 	const index = products.findIndex((p) => compareProduct(p, comp));
	// 	return [];
	// });
}

export function addProduct(product: Product) {
	_bill.update((products: Product[]) => {
		const index = products.findIndex((p) => compareProduct(p, product));
		if (index > -1) {
			const mod = { ...products[index], quantity: products[index].quantity + 1 };
			products.splice(index, 1, mod);
			return products;
		}
		return [...products, { ...product, quantity: 1 }];
	});
}

export function removeProduct(product: Product) {
	_bill.update((products: Product[]) => products.filter((p) => p.name !== product.name));
}

export function resetBill() {
	_bill.set([]);
}

export default _bill;
