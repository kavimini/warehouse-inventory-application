import { Customer } from "./customer";

export interface Outbound {
    id: number;
    reference: string;
    dateShipped: Date;
    sku: string;
    remarks: string;
    destination: string;
    quantity: number;
    customer: Customer;

}
