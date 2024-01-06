import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFunctionComponent } from './components/pages/create-function/create-function.component';
import { MetricComponent } from './components/pages/metric/metric.component';

const routes: Routes = [
  { path: 'dashboard/serverless/create', component: CreateFunctionComponent},
  { path: 'dashboard/serverless/:id', component: MetricComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServerlessRoutingModule { }
