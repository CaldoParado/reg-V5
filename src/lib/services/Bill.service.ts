import { Product, type Complement, type ProductComplement, Category } from '$lib/models/bill.model';
import { get, writable, type Writable } from 'svelte/store';
import { DBService } from './DB.service';
import { Snowflake } from "@theinternetfolks/snowflake";
import { showError, showSuccess } from './Utils/Notification.service';

/**
 * Almacena una lista de productos para una factura.
 * @type {Writable<product[]>}
 */
export const _bill: Writable<Product[]> = writable([]);
export const product_complements: Writable<ProductComplement[]> = writable([]);

function flatBill(bill: Product[]) {
	return bill.map((p: Product) => { return { id: p.id, qty: p.quantity, comps: p.complements.map(c => { return { id: c.id } }) } })
}

export function payBill() {
	const uid = Snowflake.generate();
	const bill = get(_bill);
	if (!bill.length) {
		showError('¡No hay productos!')
		return;
	}
	DBService.getInstance()
		.createDoc({
			value: get(_bill).reduce((ac, cu) => ac + cu.fullPrice(), 0),
			prods: JSON.stringify(flatBill(bill)),
			uuid: uid,
		}, 'bill')
		//Error/success handling
		.then(() => {
			resetBill();
			showSuccess(`¡Factura agregada!`);
		})
		.catch(err => {
			showError(err)
		});
}

export function addComplements(comp: Complement) {
	const bll = [...(get(_bill) || [])];
	if (bll.length > 0) {
		const prod = bll[bll.length - 1];
		if (prod.category === Category.bandeja) {
			const newProd = prod.copy();
			newProd.setComplement(comp);
			bll[bll.length - 1] = newProd;
			_bill.set(bll);
			return;
		}
	}
	addProduct(new Product({ ...comp, category: Category.complemento }));
}

export function addProduct(product: Product) {
	let bll = get(_bill);
	const indx = bll.findIndex((p) => p.compareProduct(product));
	if (indx > -1) {
		// const mod = new Product() { ...products[index], quantity: products[index].quantity + 1 };
		const newq = bll[indx].copy();
		newq.incrementQuantity();
		bll[indx] = newq;
	} else
		bll = [...bll, new Product(product)]
	_bill.set(bll)
}

export function removeProduct(product: Product) {
	_bill.update((products: Product[]) => products.filter((p) => p.name !== product.name));
}

export function resetBill() {
	_bill.set([]);
}

export default _bill;
