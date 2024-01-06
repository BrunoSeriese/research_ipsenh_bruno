import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingRoutingModule } from './billing-routing.module';

import { InvoicesComponent } from './pages/invoices/invoices.component';
import { LandingComponent } from './pages/landing/landing.component';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { UsageTableComponent } from './components/usage-table/usage-table.component';
import { UsageTableRowComponent } from './components/usage-table-row/usage-table-row.component';




@NgModule({
  declarations: [
    LandingComponent,
    InvoicesComponent,
    CardComponent,
    DashboardComponent,
    UsageTableComponent,
    UsageTableRowComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    BillingRoutingModule,
    SharedModule,
    BillingRoutingModule,
    CanvasJSAngularChartsModule
  ]
})
export class BillingModule { }
