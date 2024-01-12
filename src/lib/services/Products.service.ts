import type { Product } from '$lib/models/bill.model';
import type { IDBService } from '$lib/models/provider.model';
import { DBService } from './DB.service';

export class ProductService implements IDBService<Product> {
	DB_COLLECTION = 'product';

	temp_prods = [
		{
			id: '1',
			name: 'Hamburguesa Clásica!',
			shortName: 'Hamburguesa',
			icon: '🍔',
			price: 18000, // Precio en pesos colombianos
			quantity: 20,
			description: 'Deliciosa hamburguesa con carne de res, lechuga, tomate y salsa especial.'
		},
		{
			id: '2',
			name: 'Pizza Pepperoni',
			shortName: 'Pizza',
			icon: '🍕',
			price: 25000, // Precio en pesos colombianos
			quantity: 15,
			description: 'Pizza de pepperoni con salsa de tomate y queso derretido.'
		},
		{
			id: '3',
			name: 'Pollo a la Parrilla',
			shortName: 'Pollo',
			icon: '🍗',
			price: 22000, // Precio en pesos colombianos
			quantity: 25,
			description: 'Jugoso pollo a la parrilla con papas fritas y ensalada.'
		},
		{
			id: '4',
			name: 'Sándwich de Pollo',
			shortName: 'Sándwich',
			icon: '🥪',
			price: 15000, // Precio en pesos colombianos
			quantity: 30,
			description: 'Sándwich de pollo con lechuga, tomate y mayonesa.'
		},
		{
			id: '5',
			name: 'Ensalada César',
			shortName: 'Ensalada',
			icon: '🥗',
			price: 12000, // Precio en pesos colombianos
			quantity: 15,
			description: 'Ensalada César con pollo a la parrilla y aderezo especial.'
		},
		{
			id: '6',
			name: 'Pasta Alfredo',
			shortName: 'Pasta',
			icon: '🍝',
			price: 18000, // Precio en pesos colombianos
			quantity: 20,
			description: 'Pasta Alfredo con salsa cremosa de queso parmesano.'
		},
		{
			id: '7',
			name: 'Batido de Frutas',
			shortName: 'Batido',
			icon: '🥤',
			price: 8000, // Precio en pesos colombianos
			quantity: 40,
			description: 'Refrescante batido de frutas naturales.'
		},
		{
			id: '8',
			name: 'Café Americano',
			shortName: 'Café',
			icon: '☕',
			price: 5000, // Precio en pesos colombianos
			quantity: 50,
			description: 'Taza de café americano recién hecho.'
		},
		{
			id: '9',
			name: 'Torta de Chocolate',
			shortName: 'Torta',
			icon: '🍰',
			price: 15000, // Precio en pesos colombianos
			quantity: 12,
			description: 'Deliciosa torta de chocolate con crema.'
		},
		{
			id: '10',
			name: 'Helado de Vainilla',
			shortName: 'Helado',
			icon: '🍦',
			price: 7000, // Precio en pesos colombianos
			quantity: 25,
			description: 'Corneta de helado de vainilla con toppings.'
		}
	] as Product[];
	getById() {
		return DBService.getInstance().getDoc<Product>('', this.DB_COLLECTION);
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
				resolve(this.temp_prods); // Resolve the promise with your desired value
			} else {
				reject(new Error('Operation failed!', params)); // Reject the promise with an error
			}
		});
	}
}
