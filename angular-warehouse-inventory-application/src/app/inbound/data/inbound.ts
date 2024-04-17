import { Supplier } from "./supplier";

export interface Inbound {
    id: number;
    reference: string;
    dateReceived: Date;
    sku: string;
    location: string;
    quantity: number;
    remarks: string;
    supplier: Supplier;
}


