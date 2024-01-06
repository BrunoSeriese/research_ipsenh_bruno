import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {DatabaseSettingsComponent} from "./dashboard/database-settings/database-settings.component";
import {LandingComponent} from "./pages/landing.component";

const routes: Routes = [
  {
    path: 'postgres',
    redirectTo: 'dashboard/postgres'
  },
  {
    path:'dashboard/postgres/plan',
    component: LandingComponent
  },
  {
    path: 'dashboard/postgres',
    component: DashboardComponent
  },
  {
    path: 'dashboard/postgres/settings/:UUID',
    component: DatabaseSettingsComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./dashboard/database-settings/database-settings-routing.module').then(m => m.DatabaseSettingsRoutingModule)
      }
    ]
  },
  {
    path: 'settings',
    loadChildren: () => import('./dashboard/database-settings/database-settings.module').then(m => m.DatabaseSettingsModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostgresRoutingModule {
}
