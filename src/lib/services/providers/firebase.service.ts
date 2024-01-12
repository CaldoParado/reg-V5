// Import the functions you need from the SDKs you need
import { initializeApp, type FirebaseApp } from 'firebase/app';
import {
	getFirestore,
	collection,
	getDocs,
	getDoc,
	doc,
	query,
	type DocumentData,
	connectFirestoreEmulator,
	Firestore
} from 'firebase/firestore';

import { getAnalytics, type Analytics } from 'firebase/analytics';
import type { IProvider } from '$lib/models/provider.model';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAP-AEmm9mS-5T0U2mJcnUx94OqZ3sfE8I',
	authDomain: 'restaurant-872ad.firebaseapp.com',
	projectId: 'restaurant-872ad',
	storageBucket: 'restaurant-872ad.appspot.com',
	messagingSenderId: '139502818591',
	appId: '1:139502818591:web:16db8bff4bbeec01fccc2a',
	measurementId: 'G-NX0EQ6N78G'
};

// Conectar al emulador de Functions
//   if (import.meta.env.MODE === 'development') {
//     firebase.functions().useEmulator("localhost", 5001);
//   }

export class FirebaseService implements IProvider {

	db!: Firestore;
	constructor() {
		// Initialize Firebase
		const app: FirebaseApp = initializeApp(firebaseConfig);
		const db = getFirestore(app);
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const analytics: Analytics = getAnalytics(app);

		// Conectar al emulador de Firestore si es desarrollo
		console.log('DEV', import.meta.env.DEV);
		if (import.meta.env.DEV) {
			connectFirestoreEmulator(db, 'localhost', 9089);
		}
	}

	async getDoc<T>(id: string, collection: string): Promise<T> {
		const docRef = doc(this.db, collection, id);
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			return docSnap.data() as T; // Castear a T si el documento existe
		} else {
			throw new Error('Document not found'); // O manejar de otra manera
		}
	}

	async getDocs<T>(collectionPath: string): Promise<T[]> {
		const collectionRef = collection(this.db, collectionPath);
		const q = query(collectionRef); // Ajustar la consulta para filtrar resultados en la petición
		const querySnapshot = await getDocs(q);

		const documents: T[] = [];
		querySnapshot.forEach((doc: DocumentData) => {
			documents.push(doc.data() as T);
		});
		return documents;
	}

	getDocsFilter<T>(params: { [ke: string]: string }): Promise<T[]> {
		throw new Error('Method not implemented.', params);
	}
}
