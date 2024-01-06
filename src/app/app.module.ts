import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BillingModule} from './billing/billing.module';
import {MessagingModule} from './messaging/messaging.module';
import {PostgresModule} from './postgres/postgres.module';
import {ServerlessModule} from './serverless/serverless.module';
import {SharedModule} from './shared/shared.module';
import {VpsModule} from './vps/vps.module';
import {S3Module} from "./s3/s3.module";
import {DashboardModule} from "./dashboard/dashboard.module";
import {HttpClientModule} from "@angular/common/http";
import {AppConfigService} from "./postgres/app-config.service";

export function initConfig(appConfig: AppConfigService) {
  return () => appConfig.loadConfig();
}


@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MessagingModule,
    BillingModule,
    ServerlessModule,
    VpsModule,
    PostgresModule,
    S3Module,
    DashboardModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initConfig,
      deps: [AppConfigService],
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
