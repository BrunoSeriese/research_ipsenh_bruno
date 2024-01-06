import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from "./pages/landing.component";
import {DashboardComponent} from "./pages/content/dashboard/dashboard.component";
import {ContentComponent} from "./pages/content/content.component";
import {SettingsComponent} from "./pages/content/settings/settings.component";
import {VpsSettingsComponent} from "./pages/content/vps-settings/vps-settings.component";
import {NewVpsComponent} from "./pages/content/new-vps/new-vps.component";

const routes: Routes = [
  {
    path: 'vps',
    redirectTo: 'vps/dashboard',
  },
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: '',
        component: ContentComponent,
        children: [
          {
            path: 'dashboard/vps',
            component: DashboardComponent,
          },
          {
            path: 'vps/new-vps',
            component: NewVpsComponent,
            children: [
              {
                path: '',
                loadChildren: () => import('./pages/content/new-vps/new-vps-routing.module').then(m => m.NewVpsRoutingModule)
              }
            ]
          },
          {
            path: 'vps/settings',
            component: SettingsComponent,
          },
          {
            path: 'vps/vps-settings/:vmId',
            component: VpsSettingsComponent,
            children: [
              {
                path: '',
                loadChildren: () => import('./pages/content/vps-settings/vps-settings-routing.module').then(m => m.VpsSettingsRoutingModule)
              }
            ]
          }
        ]
      },
    ]
  },
  {
    path: 'vps-settings',
    loadChildren: () => import('./pages/content/vps-settings/vps-settings.module').then(m => m.VpsSettingsModule)
  },
  {path: 'new-vps', loadChildren: () => import('./pages/content/new-vps/new-vps.module').then(m => m.NewVpsModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VpsRoutingModule {
}
