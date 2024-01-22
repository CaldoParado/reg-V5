import type { IProvider } from '$lib/models/provider.model';

export class ElectronProvider implements IProvider {

	private electron = window.ELECTRON_API;


    createDoc<T>(data: T, collection: string): Promise<T> {
        return this.electron.createDoc(data, collection);
    }
    updateDoc<T>(id: string, data: T, collection: string): Promise<T> {
        return this.electron.getDoc('', collection);
        throw new Error('Method not implemented.');
    }
    deleteDoc(id: string, collection: string): Promise<void> {
        console.log(id, collection)
        throw new Error('Method not implemented.');
    }

	getDoc<T>(id: string, collection: string): Promise<T> {
		return this.electron.getDoc(id, collection);
	}

	getDocs<T>(collection: string): Promise<T[]> {
		return this.electron.getDocs(collection);
	}
    
	getDocsFilter<T>(params: { [ke: string]: string }): Promise<T[]> {
		console.log(params);
		throw new Error('not implemented');
	}
}
