import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GeneralComponent} from "./general/general.component";
import {NetworkComponent} from "./network/network.component";
import {SystemComponent} from "./system/system.component";
import {BackupsSnapshotsComponent} from "./backups-snapshots/backups-snapshots.component";
import {MonitoringAlertsComponent} from "./monitoring-alerts/monitoring-alerts.component";
import {AccessSecurityComponent} from "./access-security/access-security.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'general',
  },
  {
    path: 'general',
    component: GeneralComponent,
  },
  {
    path: 'system',
    component: SystemComponent,
  },
  {
    path: 'network',
    component: NetworkComponent,
  },
  {
    path: 'backups-snapshots',
    component: BackupsSnapshotsComponent,
  },
  {
    path: 'monitoring-alerts',
    component: MonitoringAlertsComponent,
  },
  {
    path: 'access-security',
    component: AccessSecurityComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VpsSettingsRoutingModule {
}
