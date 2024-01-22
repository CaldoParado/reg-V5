// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

/**
 * Interface for Electron API including application control, database operations,
 * and printing functionalities.
 */
export interface IElectronAPI {
    // App API methods
    toggleMenu: () => void;
    closeApp: () => void;

    // DB API methods
    getDoc: <T>(id: string, collection: string) => Promise<T>;
    getDocs: <T>(collection: string) => Promise<T[]>;
    getDocsFilter: <T>(params: { [key: string]: string }) => Promise<T[]>;
    createDoc: <T>(data: T, collection: string) => Promise<T>;
    updateDoc: <T>(id: string, data: T, collection: string) => Promise<T>;
    deleteDoc: (id: string, collection: string) => Promise<void>;

    // Printing API methods
    printWebContent: () => Promise<string>;
    printHtmlContent: (html: string) => void;
    printText: (text: string, style) => Promise<void>;
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
