import type { IProvider } from '$lib/models/provider.model';

export class ElectronProvider implements IProvider {

    private electron = window.ELECTRON_API;


    public logOut(): void {
        return;
    }
    public authByMail(email: string, password: string): Promise<unknown> {
        console.log(email, password);
        console.warn('authByMail not implemented on Electron provider');
        return new Promise(() => console.log('promise electron resolved'));
    }

    public getAuth(): boolean {
        console.log('electron is auth', false, 'it is false by default while implemented')
        return false;
    }

    createDoc<T>(data: T, collection: string): Promise<T> {
        return this.electron.createDoc(data, collection);
    }
    updateDoc<T>(id: string, data: T, collection: string): Promise<T> {
        return this.electron.getDoc(id, collection);
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
