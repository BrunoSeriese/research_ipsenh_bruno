import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {VpsRoutingModule} from './vps-routing.module';
import {LandingComponent} from './pages/landing.component';
import {ContentComponent} from './pages/content/content.component';
import {DashboardComponent} from './pages/content/dashboard/dashboard.component';
import {SettingsComponent} from './pages/content/settings/settings.component';

@NgModule({
  declarations: [
    LandingComponent,
    ContentComponent,
    DashboardComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    VpsRoutingModule,
    HttpClientModule,
  ]
})
export class VpsModule {
}
