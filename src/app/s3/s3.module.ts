import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { S3RoutingModule } from './s3-routing.module';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { DashboardTileComponent } from './components/dashboard-tile/dashboard-tile.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddBucketComponent } from './pages/add-bucket/add-bucket.component';
import { ValidationIndicatorComponent } from './components/validation-indicator/validation-indicator.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import {ProjectInterceptor} from "./interceptors/project.interceptor";
import { BucketDetailComponent } from './pages/bucket-detail/bucket-detail.component';
import { ObjectsBrowserComponent } from './components/objects-browser/objects-browser.component';

@NgModule({
  declarations: [
    LandingComponent,
    DashboardComponent,
    DashboardTileComponent,
    SearchBarComponent,
    ButtonComponent,
    AddBucketComponent,
    ValidationIndicatorComponent,
    DropdownComponent,
    BucketDetailComponent,
    ObjectsBrowserComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    S3RoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ProjectInterceptor,
      multi: true
    }
  ]
})
export class S3Module { }
