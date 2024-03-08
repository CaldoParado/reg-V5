/**
 * Interface for a data provider that performs CRUD operations on documents.
 */
export interface IProvider {
    /**
     * Retrieves a single document by its ID from a specified collection.
     * @param id The unique identifier of the document.
     * @param collection The name of the collection to retrieve the document from.
     * @returns A promise that resolves to the retrieved document of type T.
     */
    getDoc<T>(id: string, collection: string): Promise<T>;

    /**
     * Retrieves all documents from a specified collection.
     * @param collection The name of the collection to retrieve documents from.
     * @returns A promise that resolves to an array of documents of type T.
     */
    getDocs<T>(collection: string): Promise<T[]>;

    /**
     * Retrieves documents from a specified collection based on provided filters.
     * @param params An object representing filters and their values.
     * @returns A promise that resolves to an array of filtered documents of type T.
     */
    getDocsFilter<T>(params: { [key: string]: string }): Promise<T[]>;

    /**
     * Creates a new document in a specified collection.
     * @param data The data of the document to be created.
     * @param collection The name of the collection where the document will be created.
     * @returns A promise that resolves to the newly created document of type T.
     */
    createDoc<T>(data: T, collection: string): Promise<T>;

    /**
     * Updates an existing document in a specified collection by its ID.
     * @param id The unique identifier of the document to be updated.
     * @param data The updated data for the document.
     * @param collection The name of the collection containing the document.
     * @returns A promise that resolves to the updated document of type T.
     */
    updateDoc<T>(id: string, data: T, collection: string): Promise<T>;

    /**
     * Deletes a document from a specified collection by its ID.
     * @param id The unique identifier of the document to be deleted.
     * @param collection The name of the collection to delete the document from.
     * @returns A promise that resolves when the document has been deleted.
     */
    deleteDoc(id: string, collection: string): Promise<void>;

    authByMail(email: string, password: string): Promise<unknown>;
    getAuth(): unknown;
    logOut(): void;
}

export interface IDBService<T> {
    getById: () => Promise<T>;
    get: () => Promise<T[]>;
    getFilter: (params: { [ke: string]: string }) => Promise<T[]>;
}
