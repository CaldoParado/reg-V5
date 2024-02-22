import type { Product, ProductComplement } from '$lib/models/bill.model';
import type { IDBService } from '$lib/models/provider.model';
import { DBService } from './DB.service';

export class ProductService implements IDBService<Product> {
	DB_COLLECTION = 'product';
	DB_COLLECTION_COMPLEMENTS = 'complement';
	DB_COLLECTION_PRODUCT_COMPLEMENTS = 'product_complement_value';

	getById() {
		return DBService.getInstance().getDoc<Product>('', this.DB_COLLECTION);
	}

	getComplements(){
		return DBService.getInstance().getDocs<Product>(this.DB_COLLECTION_COMPLEMENTS);
	}

	getProductComplements(){
		return DBService.getInstance().getDocs<ProductComplement>(this.DB_COLLECTION_PRODUCT_COMPLEMENTS);
	}

	get(): Promise<Product[]> {
		return DBService.getInstance().getDocs<Product>(this.DB_COLLECTION);
		// return new Promise((resolve, reject) => {
		// 	const success = true; // This is just a placeholder for your actual logic

		// 	if (success) {
		// 		resolve(this.temp_prods); // Resolve the promise with your desired value
		// 	} else {
		// 		reject(new Error('Operation failed!')); // Reject the promise with an error
		// 	}
		// });
	}
	getFilter(params: { [ke: string]: string }): Promise<Product[]> {
		return new Promise((resolve, reject) => {
			const success = true; // This is just a placeholder for your actual logic

			if (success) {
				resolve([]); // Resolve the promise with your desired value
			} else {
				reject(new Error('Operation failed!', params)); // Reject the promise with an error
			}
		});
	}
}
