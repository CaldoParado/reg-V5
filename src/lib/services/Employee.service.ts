import { Employee } from "$lib/models/employee.model";
import { writable, type Writable } from "svelte/store";

/**
 * Almacena
 * @type {Writable<Employee>}
 */
export const _cashier: Writable<Employee | null> = writable(null);

export function getEmployees(): Employee[] {
    return [
        new Employee({
            id: 1,
            name: 'john doe',
            roles: ['cashier']
        }),
        new Employee({
            id: 2,
            name: 'john carter',
            roles: ['waitress']
        }),
        new Employee({
            id: 3,
            name: 'johnny',
            roles: ['delivery']
        }),
    ];
}

export function getCashiers(): Employee[]{
    return getEmployees().filter(e => e.roles.includes('cashier'));
}