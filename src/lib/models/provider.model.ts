export interface IProvider {
	getDoc<T>(id: string, collection: string): Promise<T>;
	getDocs<T>(collection: string): Promise<T[]>;
	getDocsFilter<T>(params: { [ke: string]: string }): Promise<T[]>;
}
export interface IDBService<T> {
	getById: () => Promise<T>;
	get: () => Promise<T[]>;
	getFilter: (params: { [ke: string]: string }) => Promise<T[]>;
}
