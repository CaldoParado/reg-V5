import PocketBase from 'pocketbase';
import type { IProvider } from '$lib/models/provider.model';
const url = import.meta.env.VITE_POCKETBASE_URI;
console.log(url)
const pb = new PocketBase(url);

export default pb;

export class PocketBaseProvider implements IProvider {
	getDoc<T>(id: string, collection: string): Promise<T> {
		return pb.collection(collection).getOne<T>(id);
	}
	getDocs<T>(collection: string): Promise<T[]> {
		return pb.collection(collection).getFullList<T>();
	}
	getDocsFilter<T>(params: { [ke: string]: string }): Promise<T[]> {
		console.log(params);
		return pb.collection('').getFullList<T>({ filter: '' });
	}
}
