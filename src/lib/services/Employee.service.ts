import { Employee } from "$lib/models/employee.model";
// import { writable, type Writable } from "svelte/store";
import { DBService } from "./DB.service";

/**
 * Almacena
 * @type {Writable<Employee>}
 */
// export const _cashier: Writable<Employee | null> = writable(null);

const DB_COLLECTION = 'employee';
export function getEmployees(): Promise<Employee[]> {

    return DBService.getInstance().getDocs<Employee>(DB_COLLECTION);

    // return [
    //     new Employee({
    //         id: 1,
    //         name: 'john doe',
    //         roles: ['cashier']
    //     }),
    //     new Employee({
    //         id: 2,
    //         name: 'john carter',
    //         roles: ['waitress']
    //     }),
    //     new Employee({
    //         id: 3,
    //         name: 'johnny',
    //         roles: ['delivery']
    //     }),
    // ];
}

export function getCashiers(): Promise<Employee[]> {
    return DBService.getInstance().getDocs<Employee>('');
    // return getEmployees().filter(e => e.roles.includes('cashier'));
}