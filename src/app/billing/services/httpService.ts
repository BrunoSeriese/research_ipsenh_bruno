import { Injectable } from "@angular/core";
import { Invoice } from "src/app/shared/models/invoice.model";
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs";
import { plainToInstance } from "class-transformer";
import { environment } from "src/environments/environment";
import { Usage } from "src/app/shared/models/usage.model";

@Injectable({
    providedIn: 'root'
  })
export class HttpService {
    private userID = '5867cc9d-2544-4088-ac1c-9a8b4abf784f'
    constructor(private http: HttpClient) { }


    fetchInvoices() {
        return this.http.get(environment.billingURL + '/invoices/' + this.userID).pipe(
          map((response: any) => {
            let array: Invoice[] = [];
            response = response.invoices
            array = plainToInstance(Invoice, response);
            return array; 
          })
        );
    }

    fetchUsages(){
      return this.http.get(environment.billingURL + '/usage/' + this.userID).pipe(
        map((response: any) => {
          let array: Usage[] = [];
          response = response.usages
          array = plainToInstance(Usage, response);
          return array; 
        })
      );
    }

    fetchInvoicePDF(invoiceId: string){
      return this.http.get(environment.billingURL + '/invoice/pdf/' + invoiceId)
    }
}