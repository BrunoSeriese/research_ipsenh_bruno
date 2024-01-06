import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from "./pages/landing/landing.component";
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: 'billing',
    component: LandingComponent,
    children: [
      {
        path: 'invoices',  
        component: InvoicesComponent
      },
      {
        path: '',  
        component: DashboardComponent
      }
   ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingRoutingModule { }
