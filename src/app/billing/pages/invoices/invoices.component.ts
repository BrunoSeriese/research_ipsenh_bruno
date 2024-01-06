import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {

  constructor(public invoiceService: InvoiceService) { }

  public invoiceHeaders: string[] = ["Factuur Nummer", "Status", "Prijs in €", "Maand", "Jaar"]
  public variablenames: string[] = ["number", "status", "total", "billingMonth", "billingYear"]
  public actions: string[] = [ "Download"]


  ngOnInit(): void {
    this.invoiceService.getInvoices()
  }

  search(input:string){
    this.invoiceService.SearchQuery(input)
  }

  performAction(event: any){
    if(event.action == "Download"){
      this.invoiceService.getInvoicePDF(event.id)
    }
  }


}
