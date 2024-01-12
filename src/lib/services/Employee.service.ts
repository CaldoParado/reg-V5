import type { Employee } from "$lib/models/employee.model";


export function getEmployees(): Employee[] {
    return [
        {
            id: 1,
            name: "John Doe",
            amount: 1000,
            due: new Date(),
            paid: false
        },
        {
            id: 2,
            name: "Jane Doe",
            amount: 2000,
            due: new Date(),
            paid: false
        }
    ];
}