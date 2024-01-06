import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostgresRoutingModule } from './postgres-routing.module';
import { LandingComponent } from './pages/landing.component';
import { HttpClientModule } from "@angular/common/http";
import { PlansComponent } from "./pages/content/new-database/plans/plans.component";
import { DashboardComponent } from "./dashboard/dashboard.component";


@NgModule({
  declarations: [
    LandingComponent,
    PlansComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PostgresRoutingModule,
    HttpClientModule
  ]
})
export class PostgresModule { }
