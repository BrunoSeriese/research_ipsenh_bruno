import { Injectable } from "@angular/core";
import { Invoice } from "src/app/shared/models/invoice.model";
import { HttpService } from "./httpService";

@Injectable({
    providedIn: 'root'
  })
export class InvoiceService {
    public invoices: Invoice[] = [];
    public filteredInvoices: Invoice[] = [];
    public filtered: boolean = false;
    constructor( private httpService: HttpService) { }

    async getInvoices(){
      this.httpService.fetchInvoices().subscribe(
        (response: any) => {
          this.invoices = response
        }
      );
    }

    SearchQuery(input: string){
      if(input != ""){
        this.filteredInvoices = [];
        this.invoices.forEach((invoice: any) => {
          Object.keys(invoice).forEach(key => {
            if(invoice[key].toString().includes(input) && !this.filteredInvoices.includes(invoice) && key != "id"){
              this.filteredInvoices.push(invoice)
            }
          })
        });
        this.filtered = true;
      }else{
        this.filtered = false;
      }
    }

    getInvoicePDF(invoiceId: any){
        this.httpService.fetchInvoicePDF(invoiceId).subscribe((res: any) =>{
          const linkSource = `data:application/pdf;base64,${res.invoicePDF}`;
        const downloadLink = document.createElement("a");
        const fileName = res.fileName;
        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();
        })
    }
    
}