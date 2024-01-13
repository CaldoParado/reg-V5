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
		console.log(import.meta.env.DEV);
		console.log(import.meta.env.DEV);

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

	getDoc<T>(id: string, collection: string): Promise<T> {
		return DBService.provider.getDoc(id, collection);
	}
	getDocs<T>(collection: string): Promise<T[]> {
		return DBService.provider.getDocs(collection);
	}
}
