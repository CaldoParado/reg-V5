import { ProductService } from '$lib/services/Products.service';
import type { PageLoad } from './$types';
export const prerender = true;
export const ssr = false;

export const load = (async () => {
	const psrv = new ProductService();

	const ret = {
		products: psrv.get(),
		complements: psrv.getComplements(),
	}
	console.log(ret);
	return ret;
}) satisfies PageLoad;
