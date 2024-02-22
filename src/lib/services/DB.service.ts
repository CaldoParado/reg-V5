import type { IProvider } from '$lib/models/provider.model';
import { PocketBaseProvider } from './providers/Pb.service';
import { ElectronProvider } from './providers/electron.service';
import { FirebaseService } from './providers/firebase.service';

export class DBService {
	private static instance: DBService;
	private static provider: IProvider;

	public static getInstance(): DBService {
		if (!DBService.instance) {
			DBService.instance = new DBService();
		}
		return DBService.instance;
	}

	private constructor() {
		// if (window.ELECTRON_API) {
		if (window.ELECTRON_API) {
			DBService.provider = new ElectronProvider();
		} else if (import.meta.env.DEV) { 
			// Revisa el API de electron (se conecta a Pocketbase)
			DBService.provider = new PocketBaseProvider(); //Esto es a modo de prueba
		} else if (navigator.onLine) {
			// Revisa la conexión a internet (conecta a firebase)
			DBService.provider = new FirebaseService();
		} else {
			// Dado que se ejecuta en navegador el fallback es IndexedDB
			null;
		}
	}

	private setOnlineInstance(): void {}

	/**
     * Retrieves a single document by its ID from a specified collection.
     * @param {string} id The ID of the document to retrieve.
     * @param {string} collection The collection name.
     * @returns {Promise<T>} A promise that resolves to the retrieved document.
     */
    getDoc<T>(id: string, collection: string): Promise<T> {
        return DBService.provider.getDoc(id, collection);
    }

    /**
     * Retrieves all documents from a specified collection.
     * @param {string} collection The collection name.
     * @returns {Promise<T[]>} A promise that resolves to an array of documents.
     */
    getDocs<T>(collection: string): Promise<T[]> {
        return DBService.provider.getDocs(collection);
    }

    /**
     * Creates a new document in a specified collection.
     * @param {Object} data The data of the document to be created.
     * @param {string} collection The collection name.
     * @returns {Promise<T>} A promise that resolves to the newly created document.
     */
    createDoc<T>(data: T, collection: string): Promise<T> {
        return DBService.provider.createDoc(data, collection);
    }

    /**
     * Updates an existing document in a specified collection.
     * @param {string} id The ID of the document to update.
     * @param {Object} data The new data for the document.
     * @param {string} collection The collection name.
     * @returns {Promise<T>} A promise that resolves to the updated document.
     */
    updateDoc<T>(id: string, data: T, collection: string): Promise<T> {
        return DBService.provider.updateDoc(id, data, collection);
    }

    /**
     * Deletes a document from a specified collection.
     * @param {string} id The ID of the document to delete.
     * @param {string} collection The collection name.
     * @returns {Promise<void>} A promise that resolves when the document is deleted.
     */
    deleteDoc(id: string, collection: string): Promise<void> {
        return DBService.provider.deleteDoc(id, collection);
    }
}