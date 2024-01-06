import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import {DashboardComponent} from "./content/dashboard/dashboard.component"
import { MessagingRoutingModule } from './messaging-routing.module';
import { LandingComponent } from './landing/landing.component';
import { ContentComponent } from './content/content.component';
import { RegisterAccountComponent } from './content/register-account/register-account.component';
import { SharedModule } from '../shared/shared.module';
import { ManageUsersComponent } from './content/manage-users/manage-users.component';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  declarations: [
    LandingComponent,
    ContentComponent,
    RegisterAccountComponent,
    DashboardComponent,
    ContentComponent,
    RegisterAccountComponent,
    ManageUsersComponent,
    ModalComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    MessagingRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class MessagingModule { }
