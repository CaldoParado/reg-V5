import { product_complements } from '$lib/services/Bill.service';
import { ProductService } from '$lib/services/Products.service';
import type { PageLoad } from './$types';
export const prerender = true;
export const ssr = false;

export const load = (async () => {
	const psrv = new ProductService();

	psrv.getProductComplements().then(product_complements.set);
	const ret = {
		products: psrv.get(),
		complements: psrv.getComplements(),
	}
	return ret;
}) satisfies PageLoad;
