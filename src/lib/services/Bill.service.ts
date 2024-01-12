import type { Product } from '$lib/models/bill.model';
import { writable, type Writable } from 'svelte/store';

/**
 * Almacena una lista de productos para una factura.
 * @type {Writable<product[]>}
 */
export const _bill: Writable<Product[]> = writable([]);

export function addProduct(product: Product) {
	_bill.update((products: Product[]) => [...products, product]);
}

export function removeProduct(product: Product) {
	_bill.update((products: Product[]) => products.filter((p) => p.name !== product.name));
}

export function resetBill() {
	_bill.set([]);
}

export default _bill;
