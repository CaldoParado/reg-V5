import PocketBase, { type AuthModel } from 'pocketbase';
import type { IProvider } from '$lib/models/provider.model';
import { _auth } from '../Auth.service';
const url = import.meta.env.VITE_POCKETBASE_URI;
const pb = new PocketBase(url);

export default pb;

export class PocketBaseProvider implements IProvider {

	USER_COLLECTION = 'users';

	// public authByMail(email: string, password: string): Promise<RecordAuthResponse> {

	public logOut(): void {
		pb.authStore.clear();
	}

	public authByMail(email: string, password: string): Promise<unknown> {
		return pb.collection(this.USER_COLLECTION).authWithPassword(email, password).then(res => console.log('after login:', res));
	}

	public getAuth(): AuthModel {
		// console.log('Pocketbase auth:', pb.authStore);
		return pb.authStore.model;
	}

	private validateAuthStatus() {
		// console.log('validating pb auth status', pb.authStore, pb.authStore.isValid)
		if (!pb.authStore.isValid) {
			pb.authStore.clear();
			_auth.set(null);
		}
	}

	createDoc<T>(data: T, collection: string): Promise<T> {
		this.validateAuthStatus();
		// try {
		return pb.collection(collection).create<T>(data as { [key: string]: unknown });
		// } catch (error: unknown) {
		// 	if (typeof error === "object" && error !== null && "status" in error) {
		// 		const typedError = error as ClientResponseError;
		// 		if (typedError.status === 401) {
		// 			goto('/login');
		// 		}
		// 	}
		// 	throw new Error('Failed at create');
		// }
	}
	updateDoc<T>(id: string, data: T, collection: string): Promise<T> {
		this.validateAuthStatus();

		console.log(id, data, collection)
		throw new Error('Method not implemented.');
	}
	deleteDoc(id: string, collection: string): Promise<void> {
		this.validateAuthStatus();

		console.log(id, collection);
		throw new Error('Method not implemented.');
	}
	getDoc<T>(id: string, collection: string): Promise<T> {
		this.validateAuthStatus();

		return pb.collection(collection).getOne<T>(id);
	}

	getDocs<T>(collection: string): Promise<T[]> {
		this.validateAuthStatus();

		// console.log('llamando a', collection)
		// try {
		return pb.collection(collection).getFullList<T>();
		// } catch (error: unknown) {
		// 	if (typeof error === "object" && error !== null && "status" in error) {
		// 		const typedError = error as ClientResponseError;
		// 		if (typedError.status === 401) {
		// 			goto('/login');
		// 		}
		// 	}
		// 	throw new Error('Failed at create');
		// }
	}

	getDocsFilter<T>(params: { [ke: string]: string }): Promise<T[]> {
		console.log(params);
		this.validateAuthStatus();

		return pb.collection('').getFullList<T>({ filter: '' });
	}
}
