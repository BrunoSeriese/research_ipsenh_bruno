import { Expose } from "class-transformer";

export class Product {
    @Expose() id: string;
    @Expose() name: string;
    @Expose() description: string;
    @Expose() service: string;
    @Expose() type: string;
    @Expose() cost: number;


    constructor(id: string, name: string, description: string, service: string, type: string, cost: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.service = service;
        this.type = type;
        this.cost = cost
    }
}