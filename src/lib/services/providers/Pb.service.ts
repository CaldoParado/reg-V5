import PocketBase from 'pocketbase';
import type { IProvider } from '$lib/models/provider.model';
const url = import.meta.env.VITE_POCKETBASE_URI;
const pb = new PocketBase(url);

export default pb;

export class PocketBaseProvider implements IProvider {
	createDoc<T>(data: T, collection: string): Promise<T> {
		return pb.collection(collection).create<T>(data as {[key: string]: unknown});
	}
	updateDoc<T>(id: string, data: T, collection: string): Promise<T> {
		throw new Error('Method not implemented.');
	}
	deleteDoc(id: string, collection: string): Promise<void> {
		throw new Error('Method not implemented.');
	}
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
