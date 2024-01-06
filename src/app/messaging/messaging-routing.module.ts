import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from "./landing/landing.component";
import { DashboardComponent } from './content/dashboard/dashboard.component';
import { RegisterAccountComponent } from './content/register-account/register-account.component';
import { ManageUsersComponent } from './content/manage-users/manage-users.component';

const routes: Routes = [
  {
    path: 'messaging',
    component: LandingComponent,
  },
  {
    path: 'dashboard/messaging/add-project',
    component: RegisterAccountComponent,
  },
  {
    path: 'dashboard/messaging/users',
    component: ManageUsersComponent,
  },
  {
    path: 'dashboard/messaging',
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagingRoutingModule { }
