import { Injectable } from "@angular/core";
import { Usage } from "src/app/shared/models/usage.model";
import { HttpService } from "./httpService";

@Injectable({
    providedIn: 'root'
  })

export class UsageService {
  public usages: Usage[] = [];
  public transformedData: DataPoint[] = [];

  constructor( private httpService: HttpService) { }

  getUsages(){
    this.httpService.fetchUsages().subscribe(
      (response: any) => {
        this.usages = this.sortUsages(response)
        this.transformedData = this.transformUsagesToDataPoints()
      }
    );
  }

  sortUsages(usage: Usage[]){
    return usage.sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime());
  }
  
  getTotalPrice(){
    let totalPrice: number = 0;
    this.usages.forEach(usage => {
      totalPrice = totalPrice + usage.quantity * usage.product.cost
    });
    totalPrice = Math.round((totalPrice + Number.EPSILON) * 100) / 100
    return "€ " + totalPrice;
  }

  getAmountOfEvents(){
    return this.usages.length
  }

  getAmountOfServices(){
    let totalServices: number = 0;
    this.usages.forEach(usage => {
      totalServices = totalServices + usage.quantity
    });
    return totalServices;
  }
  transformUsagesToDataPoints(){
    const transformedData: DataPoint[] = [];

    for (const obj of this.usages) {
      obj.created = new Date(obj.created)
      let { created, product, quantity } = obj;
      created = new Date(created.getFullYear(),created.getMonth(),created.getDay())
      const productValue = product.cost * quantity;
      const existingData = transformedData.find(data => data.x.getTime() === created.getTime());
      if (existingData) {
        existingData.y += productValue;
      } else {
        transformedData.push({ x: created, y: productValue });
      }
    }

    transformedData.sort((a, b) => a.x.getTime() - b.x.getTime());
    let cumulativeSum = 0;
    for (const data of transformedData) {
      cumulativeSum += data.y;
      data.y = cumulativeSum;
    }
    return transformedData;
  }
}

interface DataPoint {
  x: Date;
  y: number;
}