export class Employee {
	id: number;
	name: string;
	lastName: string;
	document: string;
	documentType: 'cc' | 'ppt' | 'nit' | 'ti';
	roles: string[];
	status: boolean;
	user: string;

	constructor(emp: Partial<Employee>) {
		this.id = emp.id!;
		this.name = emp.name!;
		this.lastName = emp.lastName!;
		this.document = emp.document!;
		this.documentType = emp.documentType ?? 'cc';
		this.roles = emp.roles ?? ['default'];
		this.status = true;
		this.user = emp.user!;
	}
}

type deliveryDetails = {
	zone: number;
	vehicle: number;
}

export type Deliveryman = Employee & deliveryDetails;

// const d: Deliveryman | null = null;