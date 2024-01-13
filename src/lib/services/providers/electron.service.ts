import type { IProvider } from '$lib/models/provider.model';
// const url = import.meta.env.VITE_POCKETBASE_URI;

export class ElectronProvider implements IProvider {
	private electron = window.ELECTRON_API;

	getDoc<T>(id: string, collection: string): Promise<T> {
		return this.electron.getDoc(id, collection);
		// return pb.collection(collection).getOne<T>(id);
	}
	getDocs<T>(collection: string): Promise<T[]> {
		return this.electron.getDocs(collection);
	}
	getDocsFilter<T>(params: { [ke: string]: string }): Promise<T[]> {
		console.log(params);
		throw new Error('not implemented');
	}
}
