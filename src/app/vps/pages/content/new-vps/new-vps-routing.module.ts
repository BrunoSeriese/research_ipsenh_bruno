import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlansComponent} from "./plans/plans.component";
import {PlanDetailsComponent} from "./plan-details/plan-details.component";
import {NewVpsComponent} from "./new-vps.component";

const routes: Routes = [
  {
    path: '', component: NewVpsComponent, children: [
      {path: '', redirectTo: 'plans', pathMatch: 'full'},
      {path: 'plans', component: PlansComponent},
    ]
  },
  {path: 'plans/:id', component: PlanDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewVpsRoutingModule {
}
