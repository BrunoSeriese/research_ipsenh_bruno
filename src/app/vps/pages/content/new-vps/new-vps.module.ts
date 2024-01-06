import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NewVpsRoutingModule} from './new-vps-routing.module';
import {NewVpsComponent} from './new-vps.component';
import {PlansComponent} from './plans/plans.component';
import {PlanDetailsComponent} from './plan-details/plan-details.component';


@NgModule({
  declarations: [
    NewVpsComponent,
    PlansComponent,
    PlanDetailsComponent
  ],
  imports: [
    CommonModule,
    NewVpsRoutingModule
  ]
})
export class NewVpsModule {
}
