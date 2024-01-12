export type Employee = {
	id: number;
	name: string;
	amount: number;
	due: Date;
	paid: boolean;
}

type deliveryDetails = {
    zone: number;
    vehicle: number;
}

export type Deliveryman = Employee & deliveryDetails;

const d: Deliveryman | null = null;

console.log(d!.zone);