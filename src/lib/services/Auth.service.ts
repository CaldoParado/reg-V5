import type { IProvider } from "$lib/models/provider.model";
import { writable, type Writable } from "svelte/store";
import { DBService } from "./DB.service";
import { FirebaseService } from "./providers/firebase.service";
import type { AuthModel } from "pocketbase";

export const _auth: Writable<unknown> = writable(undefined);

export class AuthService {

    private static instance: AuthService;
    private static fbService: FirebaseService | IProvider;//IProvider;

    public static getInstance(): AuthService {
        if (!AuthService.instance) {
            AuthService.instance = new AuthService();
        }
        return AuthService.instance;
    }

    private constructor() {
        AuthService.fbService = new FirebaseService();

    }

    public localAuthByMailAndPassword(email: string, password: string) {
        DBService.getInstance().logOut();
        DBService.getInstance().authByMail(email, password)
            .then(resp => _auth.set(resp));
    }

    public fbAuthByMailAndPassword(email: string, password: string) {
        AuthService.fbService.authByMail(email, password)
            .then(resp => _auth.set(resp));
    }

    public getLocalAuth(): AuthModel {
        return DBService.getInstance().getAuthPB();
    }

    public logOut() {
        _auth.set(null);
        return DBService.getInstance().logOut();
    }

}