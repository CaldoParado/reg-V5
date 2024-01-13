// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

export interface IElectronAPI {
	// loadPreferences: () => Promise<void>,

	//DB API methods
	getDoc: (id: string, collection: string) => Promise<T>;
	getDocs: (collection: string) => Promise<T[]>;
	getDoc: (id: string, collection: string) => Promise<T>;

	//Printing API methods
	printWebContent: () => Promise<string>;
	printHtmlContent: (html: string) => void;
	printText: (text, style) => Promise<void>;
	printVale: () => void;
}

declare global {
	interface Window {
		ELECTRON_API: IElectronAPI;
	}
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
