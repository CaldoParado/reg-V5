export class Employee {
	id: number;
	name: string;
	roles: string[];
	status: boolean;

	constructor(emp: Partial<Employee>) {
		this.id = emp.id!;
		this.name = emp.name!;
		this.roles = emp.roles!;
		this.status = true;
	}
}

type deliveryDetails = {
	zone: number;
	vehicle: number;
}

export type Deliveryman = Employee & deliveryDetails;

// const d: Deliveryman | null = null;