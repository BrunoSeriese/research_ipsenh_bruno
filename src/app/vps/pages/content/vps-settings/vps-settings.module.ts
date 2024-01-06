import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VpsSettingsRoutingModule } from './vps-settings-routing.module';
import { VpsSettingsComponent } from './vps-settings.component';
import { SystemComponent } from './system/system.component';
import { NetworkComponent } from './network/network.component';
import { BackupsSnapshotsComponent } from './backups-snapshots/backups-snapshots.component';
import { MonitoringAlertsComponent } from './monitoring-alerts/monitoring-alerts.component';
import { AccessSecurityComponent } from './access-security/access-security.component';
import { FormsModule } from '@angular/forms';
import { CustomSelectComponent } from 'src/app/vps/components/custom-select.component';


@NgModule({
  declarations: [
    VpsSettingsComponent,
    SystemComponent,
    NetworkComponent,
    BackupsSnapshotsComponent,
    MonitoringAlertsComponent,
    AccessSecurityComponent,
    CustomSelectComponent,
  ],
  imports: [
    CommonModule,
    VpsSettingsRoutingModule,
    FormsModule,
  ]
})
export class VpsSettingsModule { }
