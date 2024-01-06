import { Expose } from "class-transformer";

export class Invoice {
    @Expose() id: number;
    @Expose() number: number;
    @Expose() billingMonth: number;
    @Expose() billingYear: number;
    @Expose() total: number;
    @Expose() status: string;


    constructor(id: number, billingMonth: number, billingYear: number, total: number, number: number, status: string) {
        this.id = id;
        this.billingMonth = billingMonth;
        this.billingYear = billingYear;
        this.total = total;
        this.number = number;
        this.status = status
    }
}